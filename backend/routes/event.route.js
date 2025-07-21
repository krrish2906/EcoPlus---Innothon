import { createEvent , getAllEvents , getEventById , updateEvent , deleteEvent } from "../controllers/event.controller.js";
import express from "express";
import {protectRoute} from '../middlewares/auth.middleware.js'
const router = express.Router();
import {uploadPostImage} from "../middlewares/upload.js";

router.post('/create' , protectRoute , uploadPostImage.single("image") , createEvent)
router.get('/all' , getAllEvents)
router.get('/:id' , getEventById)
router.put('/update/:id' , protectRoute , updateEvent)
router.delete('/delete/:id' , protectRoute , deleteEvent)

export default router
