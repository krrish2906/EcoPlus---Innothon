import Post from "../models/post.model.js";

export const create = async (req , res) => {
    try {
        const post = await Post.create(req.body);
        return res.status(200).json(post);
    } catch (error) {
        console.log("Error in the create controller" , error.message);
        return res.status(500).json({ message: "Internal  Server Error" })
    }
}   

export const deletePost = async (req , res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json(post);
    } catch (error) {
        console.log("Error in the delete controller" , error.message);
        return res.status(500).json({ message: "Internal  Server Error" })
    }
}

export const updatePost = async (req , res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id , req.body , {new : true});
        return res.status(200).json(post);
    } catch (error) {
        console.log("Error in the update controller" , error.message);
        return res.status(500).json({ message: "Internal  Server Error" })
    }
}

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

