import React from "react";
import {
  Calendar,
  MapPin,
  Clock,
  UserRound,
  AlignLeft,
} from "lucide-react";
import { motion } from "framer-motion";

function EventCard({ event }) {
  const { title, description, imageUrl, location, date, time, host } = event;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.006 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image */}
      <div className="md:w-1/3 h-60">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="md:w-2/3 p-6 flex flex-col justify-between">
        <div className="mb-3">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 truncate capitalize">
            {title || "Untitled Event"}
          </h2>

          <p className="text-gray-600 text-sm mb-3 flex items-start gap-2 line-clamp-3">
            <div className="bg-gray-100 p-1 rounded-full">
              <AlignLeft className="w-4 h-4 text-gray-600" />
            </div>
            {description || "No description provided."}
          </p>
        </div>

        {/* Event Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="bg-green-100 p-1 rounded-full">
              <MapPin className="w-4 h-4 text-green-600" />
            </div>
            <span className="truncate" title={location?.address}>
              {location?.address || "N/A"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-1 rounded-full">
              <Calendar className="w-4 h-4 text-blue-600" />
            </div>
            <span>
              {date ? new Date(date).toLocaleDateString("en-GB") : "N/A"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="bg-yellow-100 p-1 rounded-full">
              <Clock className="w-4 h-4 text-yellow-500" />
            </div>
            <span>{time || "N/A"}</span>
          </div>

          {host && (
            <div className="flex items-center gap-2">
              <div className="bg-purple-100 p-1 rounded-full">
                <UserRound className="w-4 h-4 text-purple-500" />
              </div>
              <span className="truncate" title={host.fullName}>
                {host.fullName}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default EventCard;




// import React from "react";

// function EventCard({ event }) {
//   const { title, description, imageUrl, location, date, time, host } = event;

//   return (
//     <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 max-h-60 min-h-60">
      
//       {/* Image Section */}
//       <div className="md:w-1/3 h-60">
//         {imageUrl && (
//           <img
//             src={imageUrl}
//             alt="Event"
//             className="w-full h-full object-cover"
//           />
//         )}
//       </div>

//       {/* Content Section */}
//       <div className="md:w-2/3 p-4 flex flex-col justify-between">
//         <div className="space-y-1">
//           <h1 className="text-lg font-semibold text-gray-800 truncate">
//             Title: {title}
//           </h1>
//           <p className="text-gray-600 text-sm line-clamp-2">
//             <span className="font-medium">Description:</span> {description}
//           </p>
//           <p className="text-gray-600 text-sm truncate">
//             <span className="font-medium">Location:</span>{" "}
//             {location?.address || "N/A"}
//           </p>
//           <p className="text-gray-600 text-sm truncate">
//             <span className="font-medium">Date:</span> {date ? new Date(date).toLocaleDateString() : "N/A"}
//           </p>
//           <p className="text-gray-600 text-sm truncate">
//             <span className="font-medium">Time:</span> {time || "N/A"}
//           </p>
//           {host && (
//             <p className="text-gray-600 text-sm truncate">
//               <span className="font-medium">Host:</span> {host.fullName}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventCard;