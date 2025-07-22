import express from "express";
import { createComment, deleteComment, getCommentsByTarget } from "../controllers/comment.controller.js"; // Fixed typo: contoller -> controller
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

// Create a comment
router.post("/create", protectRoute, createComment);

// Delete a comment
router.delete("/delete/:id", protectRoute, deleteComment);

// Get all comments for a specific post or event
router.get("/", getCommentsByTarget);

export default router;