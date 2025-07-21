import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import SideBar from '../components/SideBar'
import { useNavigate } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { useState } from 'react'

function Events() {
    useEffect(() => {
        const event = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/event/all");
                setEvents(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        event();
    }, [])

    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
  return (
    <div className="flex h-screen overflow-hidden font-sans bg-gray-50">
      {/* Sidebar */}
      <SideBar/>

      {/* Main Feed */}
      <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Events</h1>
          <button
            className="px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/eventform")}
          >
            + Create Event
          </button>
        </div>

        <div className="space-y-10">
          { events.length === 0 ? (
            <p className="text-gray-500 text-center">No events found.</p>
          ) : (
            events.map((event, index) => <EventCard key={index}  event={event} />)
          )}
        </div>
      </main>
    </div>
  )
}

export default Events
