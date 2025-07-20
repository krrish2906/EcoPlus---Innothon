import React from "react";

function CommunityCard({ community }) {
  const {
    fullName,
    email,
    website,
    createdAt,
    profilePic
  } = community;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 max-h-60 min-h-60">
      {/* Image Section */}
      <div className="md:w-1/3 h-60 flex items-center justify-center bg-gray-50">
        {profilePic ? (
          <img
            src={profilePic}
            alt={fullName}
            className="w-32 h-32 object-cover rounded-full border border-gray-300"
          />
        ) : (
          <div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-3xl font-bold">
            {fullName ? fullName[0] : "?"}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <div className="space-y-1">
          <h1 className="text-lg font-semibold text-gray-800 truncate">
            {fullName}
          </h1>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Email:</span> {email}
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Website:</span>{" "}
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {website}
            </a>
          </p>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">Joined:</span> {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
