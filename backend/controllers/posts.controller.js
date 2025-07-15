import Post from "../models/post.model.js";
import {cloudinary} from "../config/cloudinary.js";

export const create = async (req, res) => {
  try {
    const { report, category, status, createdBy } = req.body;

    
    if (!report || !report.image) {
      return res.status(400).json({ message: 'Image is required to create a post' });
    }

    
    const uploadResponse = await cloudinary.uploader.upload(report.image);
    const imageUrl = uploadResponse.secure_url;

    const post = await Post.create({
      report: {
        title: report.title,
        description: report.description,
        location: report.location,
        imageUrl: imageUrl, 
      },
      category,
      status,
      createdBy,
    });

    return res.status(201).json(post);
  } catch (error) {
    console.error('Error in the create controller:', error.message);
    return res.status(500).json({ message: 'Internal Server Error' });
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
        const posts = await Post.find();
        return res.status(200).json(posts);
    } catch (error) {
        console.log("Error in the get all controller" , error.message);
        return res.status(500).json({ message: "Internal  Server Error" })
    }
}

export const getPostById = async (req , res) => {
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        console.log("Error in the get by id controller" , error.message);
        return res.status(500).json({ message: "Internal  Server Error" })
    }
}

