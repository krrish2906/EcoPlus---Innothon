// src/components/RecentActivity.js
import React from "react";

const activities = [
  { user: 'Sophia Clark', action: 'Joined the platform', time: '2023-09-20 10:00 AM' },
  { user: 'Ethan Carter', action: 'Created a new organization', time: '2023-09-20 11:30 AM' },
  { user: 'Olivia Bennett', action: 'Posted an update', time: '2023-09-20 12:45 PM' },
  { user: 'Liam Foster', action: 'Registered for an event', time: '2023-09-20 02:15 PM' },
  { user: 'Ava Morgan', action: 'Shared a post', time: '2023-09-20 03:30 PM' },
];

const RecentActivity = () => (
  <div className="bg-white p-6 rounded-3xl shadow mt-8">
    <div className="text-lg font-semibold mb-4">Recent Activity</div>
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="py-2 px-3 text-gray-500 font-medium">User</th>
          <th className="py-2 px-3 text-gray-500 font-medium">Action</th>
          <th className="py-2 px-3 text-gray-500 font-medium">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((a, idx) => (
          <tr key={idx} className="border-t">
            <td className="py-2 px-3">{a.user}</td>
            <td className="py-2 px-3">{a.action}</td>
            <td className="py-2 px-3">{a.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentActivity;
