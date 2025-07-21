import React from "react";

function EventCard({ event }) {
  const { title, description, imageUrl, location, date, time, host } = event;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 max-h-60 min-h-60">
      
      {/* Image Section */}
      <div className="md:w-1/3 h-60">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Event"
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
          <p className="text-gray-600 text-sm truncate">
            <span className="font-medium">Date:</span> {date ? new Date(date).toLocaleDateString() : "N/A"}
          </p>
          <p className="text-gray-600 text-sm truncate">
            <span className="font-medium">Time:</span> {time || "N/A"}
          </p>
          {host && (
            <p className="text-gray-600 text-sm truncate">
              <span className="font-medium">Host:</span> {host.name || host}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
