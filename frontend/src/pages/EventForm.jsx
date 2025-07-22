import React, { useState, useEffect } from "react";
import axios from "../api/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUserLocation from "../hooks/useUserLocation";

function EventForm() {
    const { location, loading, error } = useUserLocation();
    const navigate = useNavigate();
    const [displayCity, setDisplayCity] = useState("Fetching location...");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        image: null,
    });

    useEffect(() => {
        if (loading) {
            setDisplayCity("Fetching location...");
        } else if (error) {
            setDisplayCity("Could not fetch location.");
        } else if (location && location.formatted) {
            const city = location.city || location.village || location.state || "Unknown Location";
            setDisplayCity(city);

            setFormData((prev) => ({
                ...prev,
                location: {
                    lat: location.lat,
                    lng: location.lon,
                    address: location.formatted,
                },
            }));
        }
    }, [location, loading, error]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append("title", formData.title);
            data.append("description", formData.description);
            data.append("date", formData.date);
            data.append("time", formData.time);
            if (formData.image) data.append("image", formData.image);
            data.append("location", JSON.stringify(formData.location));

            // Debugging: log FormData entries
            for (let [key, value] of data.entries()) {
                console.log(`${key}:`, value);
            }

            await axios.post("/event/create", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            toast.success("Event created successfully!");
            navigate("/");
        } catch (error) {
            console.error("Failed to create event:", error.response || error);
            toast.error(error.response?.data?.message || "Failed to create event. Please try again.");
        }
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <form
                className="bg-white text-black w-full max-w-md p-6 rounded-2xl shadow-2xl space-y-5"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center">Create Event</h2>

                {/* Title */}
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <textarea
                        name="description"
                        placeholder="Description"
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        rows="3"
                        required
                    ></textarea>
                </div>

                {/* Location */}
                <div>
                    <input
                        type="text"
                        name="location"
                        value={displayCity}
                        readOnly
                        className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* Date */}
                <div>
                    <input
                        type="date"
                        name="date"
                        min={today}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </div>

                {/* Time */}
                <div>
                    <input
                        type="time"
                        name="time"
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block mb-1 font-medium">Event Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-white text-black"
                        accept="image/*"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Submit Event
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EventForm;
