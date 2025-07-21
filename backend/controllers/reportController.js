import Report from "../models/report.model.js";
import Post from "../models/post.model.js";
import User from "../models/user.model.js"; // ⬅️ replace NGO import
import {transporter} from "../config/mailer.js";

export const createReport = async (req, res) => {
  try {
    const { postId, description, category, imageUrl, user } = req.body;

    // 1. Fetch the post
    const post = await Post.findById(postId);
    if (!post || !post.location || !post.location.coordinates) {
      return res.status(404).json({ message: "Post not found or has no coordinates" });
    }

    const coordinates = post.location.coordinates;

    // 2. Create the report with post location
    const report = new Report({
      description,
      category,
      location: {
        type: "Point",
        coordinates,
        address: post.location.address || "Unknown location",
      },
      imageUrl,
      user,
    });

    await report.save();

    // 3. Find nearby NGOs (users with role = "organisations") within 10km
    const nearbyNGOs = await User.find({
      role: "organisations",
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates,
          },
          $maxDistance: 10000, // 10km
        },
      },
    });

    // 4. Notify NGOs via email
    for (const ngo of nearbyNGOs) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: ngo.email,
        subject: "New Environmental Report Near You",
        text: `
          Hello ${ngo.fullName},
          A new environmental issue has been reported near your area:
          Description: ${description}
          Category: ${category}
          Location: ${post.location.address || "Unknown"}
          Image: ${imageUrl}
        `,
      });
    }

    return res.status(201).json({
      message: "Report created and nearby NGOs notified",
      report,
    });
  } catch (error) {
    console.error("Error creating report:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
