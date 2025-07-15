import React from "react";

function PostForm() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <form className="bg-white text-black w-full max-w-md p-6 rounded-2xl shadow-2xl space-y-5">
                <h2 className="text-2xl font-bold text-center">Create a Post</h2>

                {/* Post content input */}
                <div>
                    <textarea
                        rows="4"
                        placeholder="What's on your mind?"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    ></textarea>
                </div>

                {/* Title */}
                <div>
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Description */}
                <div>
                    <input
                        type="text"
                        placeholder="Description"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Location */}
                <div>
                    <input
                        type="text"
                        placeholder="Location"
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block mb-1 font-medium">Image</label>
                    <input
                        type="file"
                        className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black"
                    />
                </div>

                {/* Category */}
                <div>
                    <select
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
