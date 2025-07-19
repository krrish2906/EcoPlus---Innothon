import Post from "../models/post.model.js";
import {cloudinary} from "../config/cloudinary.js";


export const create = async (req, res) => {
  try {
    const { title, description, location, category } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const imageUrl = req.file.path; // Already hosted on Cloudinary

    const post = await Post.create({
      report: {
        title,
        description,
        location,
        imageUrl,
      },
      category,
      createdBy: req.user?._id || "687665cde422165dc861b011",
    });

    return res.status(201).json(post);
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


export const getAllPosts = async (req , res) => {
    try {
        const posts = await Post.find().sort({createdAt : -1});
        return res.status(200).json(posts);
    } catch (error) {
        console.log("Error in the get all controller" , error.message);
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
        { category: { $regex: search, $options: 'i' } },
      ]
    });

    return res.status(200).json(posts);
  } catch (error) {
    console.log('Error in the search controller', error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const getPostById = async (req , res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        console.log("Error in the get by id controller" , error.message);
        return res.status(500).json({ message: "Internal  Server Error" })
    }
}

