import Comment from "../models/comment.model.js";
import Event from "../models/event.model.js";
import Post from "../models/post.model.js";

// Create a new comment
export const createComment = async (req, res) => {
    try {
        const { content, targetType, targetId } = req.body;
        const userId = req.user._id;

        if (!content || !targetType || !targetId) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        const comment = await Comment.create({
            content,
            targetType,
            targetId,
            createdBy: userId
        });

        // Add comment ID to the target's comments field
        if (targetType === "Event") {
            await Event.findByIdAndUpdate(targetId, { $push: { comments: comment._id } });
        } else if (targetType === "Post") {
            await Post.findByIdAndUpdate(targetId, { comments: comment._id });
        }

        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a comment by ID
export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByIdAndDelete(id);
        if (!comment) {
            return res.status(404).json({ message: "Comment not found." });
        }

        // Remove comment ID from the target's comments field
        if (comment.targetType === "Event") {
            await Event.findByIdAndUpdate(comment.targetId, { $pull: { comments: comment._id } });
        } else if (comment.targetType === "Post") {
            await Post.findByIdAndUpdate(comment.targetId, { $pull: { comments: comment._id } });
        }

        res.status(200).json({ message: "Comment deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all comments for a specific post or event
export const getCommentsByTarget = async (req, res) => {
    try {
        const { targetType, targetId } = req.query;
        if (!targetType || !targetId) {
            return res.status(400).json({ message: "Missing targetType or targetId." });
        }
        const comments = await Comment.find({ targetType, targetId })
            .populate("createdBy", "_id name")
            .sort({ createdAt: -1 });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
