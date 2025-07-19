import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

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
      <aside className="w-64 bg-white p-6 border-r border-gray-200 shadow-sm">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 mb-5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Filters */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Filters</h2>
          <div className="flex flex-wrap gap-2">
            {["Category", "Organization", "Date", "Location"].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Organizations */}
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Organizations
          </h2>
          <div className="space-y-4">
            {organizations.map((org) => (
              <div key={org.name} className="flex items-center gap-3">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {org.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {org.followers} followers
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

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
