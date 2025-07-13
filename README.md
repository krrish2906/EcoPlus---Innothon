'''
We are building a web-based solution that empowers citizens to report garbage-affected or polluted areas by uploading images, descriptions, and geolocation data. This platform will serve as a bridge between the public, local authorities, and environmental organizations, ensuring that issues are brought to attention quickly and transparently.

In addition, the platform will allow NGOs and community groups to promote environmental events such as tree plantation drives, clean-up campaigns, and sustainability workshops. Citizens can discover, join, and contribute to these events, creating a network of community-driven environmental action.

Our goal is to create a digital ecosystem for civic engagement and environmental accountability, turning everyday observations into impactful change.

'''

'''

SRS : 

📋 Software Requirements
1. Functional Requirements
✅ Users can create an account, log in, and manage their profile.

✅ Users can report an environmental issue (e.g., trash site) with:

Image upload

Description

Auto-location (using geolocation API)

Category tags (e.g., plastic waste, sewage, illegal dumping)

✅ Reports are displayed on a public map view with status indicators.

✅ NGOs or authorities can view, filter, and respond to reported issues (via dashboard or API).

✅ NGOs and event organizers can:

Post eco-events (tree plantation, clean-up drives, etc.)

Add event details (location, time, description, contact info)

✅ Citizens can:

Browse or search upcoming events

View event map or list

Join/RSVP to events

✅ Users can comment on reports or events to foster discussion or updates.

✅ Admin dashboard to manage users, content, and flagged reports.

2. Non-Functional Requirements
⚙️ Performance: System should handle at least 1,000 concurrent users smoothly.

📱 Responsiveness: Web app must be mobile- and tablet-friendly.

🔐 Security: All user data should be stored securely (hashed passwords, input sanitization, etc.)

🧩 Scalability: Backend should support scaling to more cities or regions easily.

🧪 Reliability: Minimal downtime, with robust image upload and geolocation fallback.

🕒 Availability: 99.9% uptime with proper error handling and retry mechanisms.

3. Technical Requirements
Frontend: React + TailwindCSS (or similar)

Backend: Node.js + Express.js

Database: MongoDB (for flexible schema: users, posts, events, comments)

Authentication: Firebase Auth / JWT (for secure login & role-based access)

Maps Integration: Leaflet.js + OpenStreetMap for displaying reports and events

Image Uploads: Cloudinary or Firebase Storage

Geolocation API: HTML5 Geolocation + optional reverse geocoding (OpenCage/Nominatim)

Hosting: Vercel (frontend) + Render/Fly.io (backend) + MongoDB Atlas

4. Optional (Stretch Goals)
🔔 Email or push notifications for new events in user’s region

🏅 Gamification: Badges for active reporters and participants

📊 Impact Dashboard: Stats on cleaned areas, users engaged, events held

📧 Authority email integration for urgent report forwarding

🧠 AI Tag Suggestions for image-based report categorization

'''