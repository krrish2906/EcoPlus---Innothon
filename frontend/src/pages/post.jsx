import React, { useEffect, useState } from "react";
import fetchPost from "@/api/fetchPost";
import { fetchComments, createComment } from "@/api/commentApi";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingComments, setIsLoadingComments] = useState(true);

  // Fetch post data
  const fetchPostData = async (id) => {
    try {
      const response = await fetchPost(id);
      setPost(response.data);
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  };

  // Fetch comments for the post
  const fetchPostComments = async (postId) => {
    try {
      setIsLoadingComments(true);
      const commentsData = await fetchComments(postId, 'Post');
      setComments(commentsData);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoadingComments(false);
    }
  };

  // Handle comment submission
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    
    if (!newComment.trim()) {
      alert("Please enter a comment");
      return;
    }

    try {
      setIsSubmitting(true);
      const createdComment = await createComment(newComment.trim(), id, 'Post');
      
      // The backend now returns the comment with populated user data
      setComments(prevComments => [createdComment, ...prevComments]);
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to post comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  useEffect(() => {
    if (id) {
      fetchPostData(id);
      fetchPostComments(id);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="h-screen flex items-center justify-center text-lg text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content: Post + Comments */}
      <div className="flex flex-1 bg-gray-100">
        {/* Post Section (Left Half) */}
        <div className="w-1/2 flex items-center justify-center px-6 py-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
            <img
              src={post.report?.imageUrl}
              alt={post.report?.title}
              className="w-full h-60 object-cover rounded-lg mb-6"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {post.report?.title}
            </h1>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Description:</span>{" "}
              {post.report?.description}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Category:</span> {post.category}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Location:</span>{" "}
              {post.report?.location?.address}
            </p>
          </div>
        </div>

        {/* Comment Section (Right Half) */}
        <div className="w-1/2 p-6 overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Comments ({comments.length})
          </h2>

          {/* Comment form */}
          <form onSubmit={handleSubmitComment} className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full h-24 p-3 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write a comment..."
              disabled={isSubmitting}
            ></textarea>
            <button 
              type="submit"
              disabled={isSubmitting || !newComment.trim()}
              className="mt-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium px-4 py-2 rounded transition-colors"
            >
              {isSubmitting ? "Posting..." : "Post Comment"}
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-4">
            {isLoadingComments ? (
              <div className="text-center text-gray-500 py-4">
                Loading comments...
              </div>
            ) : comments.length === 0 ? (
              <div className="text-center text-gray-500 py-4">
                No comments yet. Be the first to comment!
              </div>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment._id}
                  className="bg-white rounded-lg shadow p-4 text-sm text-gray-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium text-gray-800">
                      {comment.createdBy?.fullName || "Anonymous User"}
                    </p>
                    <span className="text-xs text-gray-500">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;