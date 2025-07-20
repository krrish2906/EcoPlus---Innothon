import React from 'react';
import Sidebar from '../components/slidebar';
import DashboardStats from '../components/DashboardStats';
import RecentActivity from '../components/RecentActivity';

const Dashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <DashboardStats />
        <RecentActivity />
      </main>
    </div>
  );
};

export default Dashboard;
