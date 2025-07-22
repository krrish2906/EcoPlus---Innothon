import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import axios from "../api/api.js";
import SideBar from "../components/SideBar";
import CommunityCard from "@/components/CommunityCard";
import { useNavigate } from "react-router";


export default function AllCommunity() {
  const navigate = useNavigate();
  const [communities, setCommunities] = useState([]);

    useEffect(() => {
        const fetchCommunities = async () => {
          try {
              const response = await axios.get("/auth/organisations");
              setCommunities(response.data);
          } catch (error) {
              console.error(error);
          }
        };
        fetchCommunities();
    }, []);

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-gray-50">
      {/* Sidebar */}
      <SideBar/>

      {/* Main Feed */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Communities</h1>
        </div>

        <div className="space-y-10">
          {communities.length === 0 ? (
            <p className="text-gray-500 text-center">No communities found.</p>
          ) : (
            communities.map((community, index) => (
                <div key={index} onClick={() => navigate(`/community/${community._id}`)}>
                  <CommunityCard community={community} />
                </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
