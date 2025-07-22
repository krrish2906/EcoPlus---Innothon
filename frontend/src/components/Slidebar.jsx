// src/components/Sidebar.js
import React from "react";

const Sidebar = () => (
  <aside className="w-64 bg-gray-100 min-h-screen p-4">
    <nav className="space-y-3">
      <div className="mb-6 text-xl font-bold">Admin Panel</div>
      <a href="#" className="flex items-center py-2 px-4 rounded bg-gray-200 font-semibold">Dashboard</a>
      <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-gray-200">Users</a>
      <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-gray-200">Organizations</a>
      <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-gray-200">Posts</a>
      <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-gray-200">Events</a>
    </nav>
  </aside>
);

export default Sidebar;
