import Post from "../models/post.model.js";
import Report from "../models/report.model.js";
import User from "../models/user.model.js"; // NGOs stored as users
import { cloudinary } from "../config/cloudinary.js";
import { transporter } from "../config/mailer.js";

export const create = async (req, res) => {
  try {
    const { title, description, location, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imageUrl = req.file.path;
    const userId = req.user?._id || "687665cde422165dc861b011"; // fallback user

    // ✅ Parse location safely
    let parsedLocation;
    try {
      parsedLocation = typeof location === "string" ? JSON.parse(location) : location;
    } catch (err) {
      return res.status(400).json({ message: "Invalid location JSON" });
    }

    const coordinates = parsedLocation.coordinates;

    if (!coordinates || coordinates.length !== 2) {
      return res.status(400).json({ message: "Invalid location coordinates" });
    }

    // 1. Create Post
    const post = await Post.create({
      report: {
        title,
        description,
        imageUrl
      },
      location: {
        type: parsedLocation.type || "Point",
        coordinates: parsedLocation.coordinates,
        address: parsedLocation.address || "Unknown address"
      },
      category,  // must be exactly one of the allowed enum values
      createdBy: userId,
    });


    // 2. Create Report from Post
    const report = await Report.create({
      description,
      category,
      location: {
        type: "Point",
        coordinates,
        address: parsedLocation.address || "Unknown address",
      },
      imageUrl,
      user: userId,
    });

    // 3. Find nearby NGOs (within 10km)
    const nearbyNGOs = await User.find({
      role: "organisations",
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates,
          },
          $maxDistance: 10000, // 10 km
        },
      },
    });

    // 4. Notify each NGO via email
    for (const ngo of nearbyNGOs) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: ngo.email,
        subject: "New Environmental Report Near You",
        text: `
Hello ${ngo.fullName},

A new environmental issue has been reported near your area:

🔹 Title: ${title}
🔹 Description: ${description}
🔹 Category: ${category}
🔹 Location: ${parsedLocation.address || "Unknown address"}
🔹 Image: ${imageUrl}

Please check the platform for details and consider responding.

Thank you,
EcoAlert Team
        `,
      });
    }

    return res.status(201).json({ message: "Post created and NGOs notified", post });

  } catch (error) {
    console.error("Error in create controller:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    console.log("Error in the delete controller", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { report, category, status, createdBy } = req.body;

    let updatedFields = { ...report };

    if (report.imageUrl) {
      const uploadResponse = await cloudinary.uploader.upload(report.imageUrl);
      updatedFields.report.imageUrl = uploadResponse.secure_url;
    }

    const post = await Post.findByIdAndUpdate(req.params.id, updatedFields, { new: true });

    return res.status(200).json(post);
  } catch (error) {
    console.log("Error in the update controller", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    return res.status(200).json(posts);
  } catch (error) {
    console.log("Error in the get all controller", error.message);
    return res.status(500).json({ message: "Internal  Server Error" })
  }
}

export const searchPostFilter = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search?.trim()) {
      return res.status(200).json([]);
    }

    const posts = await Post.find({
      $or: [
        { 'report.category': { $regex: search, $options: 'i' } },
        { 'report.title': { $regex: search, $options: 'i' } },
        { 'report.description': { $regex: search, $options: 'i' } },
        { 'report.location': { $regex: search, $options: 'i' } },
      ]
    });

    return res.status(200).json(posts);
  } catch (error) {
    console.log('Error in the search controller', error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    console.log("Error in the get by id controller", error.message);
    return res.status(500).json({ message: "Internal  Server Error" })
  }
}
