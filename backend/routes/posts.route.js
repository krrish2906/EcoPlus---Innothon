import express from "express";
import { create, deletePost, getAllPosts, getPostById, updatePost } from "../controllers/posts.controller.js";
const router = express.Router();
import {protectRoute} from '../middlewares/auth.middleware.js';   
import {uploadPostImage} from '../middlewares/upload.js';
router.post("/create", protectRoute , uploadPostImage.single("image") , create);
router.delete("/delete/:id" , protectRoute , deletePost);
router.put("/update/:id" , protectRoute , updatePost);
router.get("/all" , protectRoute , getAllPosts);
router.get("/:id" , protectRoute , getPostById);

export default router
