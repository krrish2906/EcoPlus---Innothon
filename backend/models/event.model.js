import mongoose from "mongoose";

const eventScehema = new mongoose.Schema(
    {
        
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        imageUrl:{
            type:String,
            // required:true
        },
        location: {
          lat: Number,
          lng: Number,
          address: String
        },
        date:    {
            type:Date,
            required:true
        },
        time: {
            type:String,
            required:true
        },
        host: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        attendees: {
            type:[mongoose.Schema.Types.ObjectId],
            ref:"User",
            default:[]
        } ,
        comments: {
            type:[mongoose.Schema.Types.ObjectId],
            ref:"Comment",
            default:[]
        } 
    }
    ,{timestamps:true}
)

const Event = mongoose.model('Event' , eventScehema);
module.exports = Event;