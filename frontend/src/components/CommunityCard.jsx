import React from "react";

function CommunityCard({ community }) {
  const { fullName, profilePic } = community;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 max-h-60 min-h-60 cursor-pointer hover:scale-[1.005] transition">
      {/* Image Section */}
      <div className="md:w-1/3 h-60 flex items-center justify-center bg-gray-50">
        {profilePic ? (
          <img
            src={profilePic}
            alt={fullName}
            className="w-48 h-48 object-cover rounded-full border border-gray-300"
          />
        ) : (
          <div className="w-48 h-48 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-6xl font-bold">
            {fullName ? fullName[0] : "?"}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <div className="space-y-1 flex justify-between">
          <h1 className="text-lg font-semibold text-gray-800 truncate">
            {fullName}
          </h1>
          <button className='bg-blue-500 text-white font-bold px-4 py-1 rounded-lg cursor-pointer'>
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
