import React from "react";

function Card({ post }) {
  const { title, description, imageUrl, location } = post.report;
  const { category, status } = post;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 max-h-60 min-h-60">
      
      {/* Image Section */}
      <div className="md:w-1/3 h-60">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Report"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <div className="space-y-1">
          <h1 className="text-lg font-semibold text-gray-800 truncate">
            Title: {title}
          </h1>
          <p className="text-gray-600 text-sm line-clamp-2">
            <span className="font-medium">Description:</span> {description}
          </p>
          <p className="text-gray-600 text-sm truncate">
            <span className="font-medium">Location:</span>{" "}
            {location?.address || "N/A"}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Category:</span> {category}
          </p>
        </div>

        <span
          className={`text-xs px-3 py-1 w-fit rounded-full ${
            status === "Pending"
              ? "bg-red-100 text-red-800"
              : status === "Resolved"
              ? "bg-green-100 text-green-800"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

export default Card;
