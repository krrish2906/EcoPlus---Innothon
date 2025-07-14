import { createEvent , getAllEvents , getEventById , updateEvent , deleteEvent } from "../controllers/event.controller.js";
import express from "express";
import {protectRoute} from '../middlewares/auth.middleware.js'
const router = express.Router();

router.post('/create' , protectRoute , createEvent)
router.get('/all' , protectRoute , getAllEvents)
router.get('/:id' , protectRoute , getEventById)
router.put('/update/:id' , protectRoute , updateEvent)
router.delete('/delete/:id' , protectRoute , deleteEvent)

export default router
