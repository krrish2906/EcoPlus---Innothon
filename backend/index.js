import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route.js'
import eventRoutes from './routes/event.route.js'
// import messageRoutes from './routes/message.route.js'
dotenv.config();
import { connectDb } from './config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
// import { app ,server} from './lib/socket.js';

const PORT = process.env.PORT;
const app = express();
app.use(express.json())
app.use(cookieParser());

app.use(cors({

    origin:"http://localhost:3000",
    credentials :true

})
)
app.use("/api/auth" , authRoutes);
app.use("/api/event" , eventRoutes);

const setUpAndStartServer = ()=>{

    app.listen(PORT , ()=>{
        console.log("app is listening on the port " , PORT);
        connectDb();
    })
}

setUpAndStartServer();