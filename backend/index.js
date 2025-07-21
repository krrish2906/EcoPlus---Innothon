import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import authRoutes from './routes/auth.route.js';
import eventRoutes from './routes/event.route.js';
import postsRoutes from './routes/posts.route.js';
import commentRoutes from './routes/comment.route.js';
import reportRoutes from './routes/reportRoutes.js'; // ✅ Added line

dotenv.config();
import { connectDb } from './config/db.js';
import cookieParser from 'cookie-parser';
import seedDB from './seeders/community.seed.js'

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/report", reportRoutes); 

const setUpAndStartServer = ()=>{
    app.listen(PORT , () => {
        console.log("app is listening on the port " , PORT);
        connectDb();
    });
}

setUpAndStartServer();
