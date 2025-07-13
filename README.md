# 🌍 EcoPulse – Civic Platform for Environmental Reporting and Action

## 🧩 Problem Statement

We are building a **web-based solution** that empowers citizens to report garbage-affected or polluted areas by uploading images, descriptions, and geolocation data. This platform will serve as a **bridge between the public, local authorities, and environmental organizations**, ensuring that issues are brought to attention quickly and transparently.

In addition, the platform will allow **NGOs and community groups to promote environmental events** such as tree plantation drives, clean-up campaigns, and sustainability workshops. Citizens can **discover, join, and contribute** to these events, creating a network of **community-driven environmental action**.

Our goal is to create a **digital ecosystem for civic engagement and environmental accountability**, turning everyday observations into impactful change.

---

## 📋 Software Requirements

### ✅ 1. Functional Requirements

- Users can **create an account**, log in, and manage their profile.
- Users can **report an environmental issue** with:
  - 📷 Image upload  
  - 📝 Description  
  - 📍 Auto-location (using Geolocation API)  
  - 🏷️ Category tags (e.g., plastic waste, sewage, illegal dumping)
- Reports are displayed on a **public map view** with status indicators.
- NGOs or authorities can **view, filter, and respond** to reported issues via dashboard or API.
- NGOs and event organizers can:
  - 📢 Post eco-events (tree plantations, clean-up drives, awareness campaigns)
  - 🗓️ Add event details (location, time, description, contact info)
- Citizens can:
  - 🔍 Browse or search upcoming events
  - 🗺️ View events on map or list
  - 🙋 Join / RSVP to events
- Users can **comment on reports or events** to foster discussion and updates.
- Admin dashboard to manage:
  - 👥 Users  
  - 🚩 Flagged reports  
  - 🗂️ Content
- 🎮 **Gamification and Leaderboard**:
  - Users earn points for reporting, joining events, or engaging with posts.
  - Top contributors are showcased in a **leaderboard** sorted by impact.
  - Badge system: “Eco Hero,” “Top Spotter,” “Volunteer Star,” etc.
- ⚠️ **Auto-Escalation System**:
  - If a reported issue is **unresolved for a defined time period** (e.g., 7 days),
  - It is **escalated to higher-level authorities or NGOs** via email or flagged priority view.
  - Reporter and local users may also get a reminder to check/update the issue status.


### ⚙️ 2. Non-Functional Requirements

- **Performance**: Handle at least 1,000 concurrent users smoothly.
- **Responsiveness**: Fully mobile- and tablet-friendly UI.
- **Security**: Secure user data storage (hashed passwords, input sanitization).
- **Scalability**: Support regional/city-based expansion with minimal configuration.
- **Reliability**: High availability, with fallback for geolocation and uploads.
- **Availability**: 99.9% uptime with graceful error handling.

---

### 💻 3. Technical Requirements

| Component         | Technology                        |
|------------------|-----------------------------------|
| **Frontend**      | React + TailwindCSS               |
| **Backend**       | Node.js + Express.js              |
| **Database**      | MongoDB                           |
| **Authentication**| Clerk / JWT             |
| **Maps**          | Leaflet.js + OpenStreetMap        |
| **Image Uploads** | Cloudinary  |
| **Geolocation**   | HTML5 Geolocation + OpenCage/Nominatim (optional) |
| **Hosting**       | Vercel (frontend) + Render/Fly.io (backend) + MongoDB Atlas |

---

### 🚀 4. Optional (Stretch Goals)

- 🔔 Email or push notifications for events in user's area    
- 📧 Integration with authority/NGO email contacts for alerts  


---
