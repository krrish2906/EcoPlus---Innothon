import mongoose from "mongoose";
                                                                            
const postSchema = new mongoose.Schema({
    report : {
       
        title : String,
        description : String,
        imageUrl : String,
        location : {
            lat: Number,
            lng: Number,
            address: String
          },

    },
    category : {
        type : String,
        required : true,
        enum : ['Garbage', 'Plastic', 'Sewage','Waste']
    },
    status : {
        type : String,
        required : true,
        enum : ['Pending', 'Resolved'],
        default : 'Pending'
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    comments:{
        type : [mongoose.Schema.Types.ObjectId],
        ref : "Comment",
        default: []
    },
    escalatedAt : {
        type : Date,
        default : null
    },
    

} , {timestamps : true})

const Post = mongoose.model("Post" , postSchema)

export default Post
