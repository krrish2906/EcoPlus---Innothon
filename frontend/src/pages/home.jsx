import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux";
import SideBar from "../components/SideBar";

const organizations = [
  {
    name: "Green Earth Initiative",
    followers: 120,
    logo: "/logos/green-earth.png",
  },
  {
    name: "Community Helpers",
    followers: 85,
    logo: "/logos/community-helpers.png",
  },
  {
    name: "Animal Rescue League",
    followers: 60,
    logo: "/logos/animal-rescue.png",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const user = useSelector((state) => state.auth);
  if(!user.isLogin){
    navigate("/auth/login");
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/posts/all");
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-gray-50">
      {/* Sidebar */}
      
      <SideBar/>

      {/* Main Feed */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Feed</h1>
          <button
            className="px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/postform")}
          >
            + Create Post
          </button>
        </div>

        <div className="space-y-10">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center">No posts found.</p>
          ) : (
            posts.map((post, index) => <Card key={index} post={post} />)
          )}
        </div>
      </main>
    </div>
  );
}
