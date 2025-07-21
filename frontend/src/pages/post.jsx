import React, { useEffect, useState } from "react";
import fetchPost from "@/api/fetchPost";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const fetch = async (id) => {
    try {
      const response = await fetchPost(id);
      setPost(response.data);
    } catch (error) {
      console.log("Error fetching post:", error);
    }
  };

  useEffect(() => {
    if (id) fetch(id);
  }, [id]);

  if (!post)
    return (
      <div className="h-screen flex items-center justify-center text-lg text-gray-600">
        Loading...
      </div>
    );

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
          <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>

          {/* Dummy comments - replace with mapped API data later */}
          <div className="space-y-4">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="bg-white rounded-lg shadow p-4 text-sm text-gray-700"
              >
                <p className="font-medium mb-1">User {num}</p>
                <p>This is a comment example from user {num}.</p>
              </div>
            ))}
          </div>

          {/* Comment form */}
          <div className="mt-6">
            <textarea
              className="w-full h-24 p-3 rounded-md border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write a comment..."
            ></textarea>
            <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
