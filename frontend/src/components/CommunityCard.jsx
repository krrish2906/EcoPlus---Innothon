import React from "react";
import { motion } from "framer-motion";

function CommunityCard({ community }) {
  const { fullName, profilePic } = community;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 max-h-60 min-h-60 cursor-pointer transition-all duration-300"
    >
      {/* Image Section */}
      <div className="md:w-1/3 h-60 flex items-center justify-center bg-gray-100 px-4">
        {profilePic ? (
          <img
            src={profilePic}
            alt={fullName}
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-inner"
          />
        ) : (
          <div className="w-40 h-40 flex items-center justify-center bg-gray-300 rounded-full text-white text-6xl font-bold shadow-inner">
            {fullName ? fullName[0] : "?"}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-gray-800 truncate capitalize">
            {fullName || "Unknown Community"}
          </h1>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-5 py-2 rounded-xl shadow-md"
          >
            Follow
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default CommunityCard;
