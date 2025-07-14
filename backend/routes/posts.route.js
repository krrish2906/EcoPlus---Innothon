import express from "express";
import { create, deletePost, getAllPosts, getPostById, updatePost } from "../controllers/posts.controller.js";
const router = express.Router();
import {protectRoute} from '../middlewares/auth.middleware.js';   

router.post("/create", create);
router.delete("/delete/:id"  , deletePost);
router.put("/update/:id"  , updatePost);
router.get("/all" , getAllPosts);
router.get("/:id" , getPostById);

export default router
