import express from "express";
import { create, deletePost, getAllPosts, getPostById, searchPostFilter, updatePost } from "../controllers/posts.controller.js";
const router = express.Router();
import {protectRoute} from '../middlewares/auth.middleware.js';         
import {uploadPostImage} from '../middlewares/upload.js';
router.post("/create", uploadPostImage.single("image") , create);
router.delete("/delete/:id" , protectRoute , deletePost);
router.put("/update/:id", protectRoute, uploadPostImage.single("image"), updatePost);
router.get("/all" , protectRoute , getAllPosts);
router.get("/:id" , protectRoute , getPostById);
router.get("/search" , protectRoute , searchPostFilter);

export default router
