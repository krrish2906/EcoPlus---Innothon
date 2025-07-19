import React, { useState } from "react";
import PostApi from "../api/postApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function PostForm() {
    const navigate = useNavigate();
    const [post , setPost] = useState({
        title : "",
        description : "",
        location : "",
        category : "",
        image : ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", post.title);
        formData.append("description", post.description);
        formData.append("location", post.location);
        formData.append("category", post.category);
        formData.append("image", post.image); // this is a File onmbject
    
        try {
            
            const response = await PostApi(formData);
            console.log(response);
            toast.success("Post created successfully");
            navigate("/")
        } catch (error) {
            console.log(error);
            toast.error("Failed to create post");
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <form
                className="bg-white text-black w-full max-w-md p-6 rounded-2xl shadow-2xl space-y-5"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center">Create a Post</h2>

                {/* Post content input */}
                

                {/* Title */}
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Description */}
                <div>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={(e) => setPost({ ...post, description: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Location */}
                <div>
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        onChange={(e) => setPost({ ...post, location: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block mb-1 font-medium">Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => setPost({ ...post, image: e.target.files[0] })}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black"
                        accept="image/*"
                    />
                </div>

                {/* Category */}
                <div>
                    <select
                        name="category"
                        onChange={(e) => setPost({ ...post, category: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
                        defaultValue=""
                    >
                        <option disabled value="">
                            Select Category
                        </option>
                        <option value="Garbage">Garbage</option>
                        <option value="Plastic">Plastic</option>
                        <option value="Sewage">Sewage</option>
                        <option value="Waste">Waste</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PostForm;
