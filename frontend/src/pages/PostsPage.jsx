import React from "react"
import { useNavigate } from "react-router-dom"
import SideBar from "../components/SideBar"



export default function Home() {
    const navigate = useNavigate();
    const handelClick = (id) => {
        navigate(`/post/${id}`);
    }

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <h1>Posts</h1>

      {/* Feed */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Feed</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => navigate('/postform')}>
            Create Post
          </button>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex items-start justify-between border-b pb-6"
              onClick={() => handelClick(post._id)}
            >
              <div className="w-2/3 pr-4">
                <p className="text-sm text-gray-500 mb-1">
                  Posted by {post.author}
                </p>
                <h2 className="font-semibold text-lg">{post.title}</h2>
                <p className="text-sm text-gray-700">{post.description}</p>
                <p className="text-sm text-gray-700">{post.category}</p>
              </div>
              <img
                src={post.image}
                alt={post.title}
                className="w-32 h-20 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
