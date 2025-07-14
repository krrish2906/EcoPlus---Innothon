import Event from '../models/event.model.js';


export const createEvent = async(req,res)=>{
    try {
        const event = await Event.create(req.body);
        return res.status(200).json(
            {
                data : event,
                message : "Event created successfully",
                success : true,
                err:{}
            }
        )
        
    } catch (error) {

        return res.status(500).json(
            {
                data : {},
                message : "Cannot create event",
                success : false,
                err:{message : error.message}
            }
        )
        
    }
}

export const getAllEvents = async(req,res)=>{
    try {
        const events = await Event.find();
        return res.status(200).json(
            {
                data : events,
                message : "Events fetched successfully",
                success : true,
                err:{}
            }
        )
        
    } catch (error) {

        return res.status(500).json(
            {
                data : {},
                message : "Cannot fetch events",
                success : false,
                err:{message : error.message}
            }
        )
        
    }
}

export const getEventById = async(req,res)=>{
    try {
        const event = await Event.findById(req.params.id);
        return res.status(200).json(
            {
                data : event,
                message : "Event fetched successfully",
                success : true,
                err:{}
            }
        )
        
    } catch (error) {

        return res.status(500).json(
            {
                data : {},
                message : "Cannot fetch event",
                success : false,
                err:{message : error.message}
            }
        )
        
    }
}

export const updateEvent = async(req,res)=>{
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).json(
            {
                data : event,
                message : "Event updated successfully",
                success : true,
                err:{}
            }
        )
        
    } catch (error) {

        return res.status(500).json(
            {
                data : {},
                message : "Cannot update event",
                success : false,
                err:{message : error.message}
            }
        )
        
    }
}

export const deleteEvent = async(req,res)=>{
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        return res.status(200).json(
            {
                data : event,
                message : "Event deleted successfully",
                success : true,
                err:{}
            }
        )
        
    } catch (error) {

        return res.status(500).json(
            {
                data : {},
                message : "Cannot delete event",
                success : false,
                err:{message : error.message}
            }
        )
        
    }
}





