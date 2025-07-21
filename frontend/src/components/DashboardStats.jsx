// src/components/DashboardStats.js
import React from "react";

const stats = [
  { label: 'Total Users', value: '1,234' },
  { label: 'Active Organizations', value: '567' },
  { label: 'Total Posts', value: '890' },
  { label: 'Upcoming Events', value: '123' },
];

const DashboardStats = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    {stats.map((stat) => (
      <div key={stat.label} className="bg-white p-6 rounded shadow text-center">
        <div className="text-sm text-gray-500">{stat.label}</div>
        <div className="text-2xl font-bold">{stat.value}</div>
      </div>
    ))}
  </div>
);

export default DashboardStats;
