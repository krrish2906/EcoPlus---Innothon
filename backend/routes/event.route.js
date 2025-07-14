import { createEvent , getAllEvents , getEventById , updateEvent , deleteEvent } from "../controllers/event.controller.js";
import express from "express";

const router = express.Router();

router.post('/create' , createEvent)
router.get('/all' , getAllEvents)
router.get('/:id' , getEventById)
router.put('/update/:id' ,updateEvent)
router.delete('/delete/:id' ,deleteEvent)

export default router
