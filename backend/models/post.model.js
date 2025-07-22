import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  report: {
    title: String,
    description: String,
    imageUrl: String
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point"
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    },
    address: {
      type: String
    }
  },
  category: {
    type: String,
    required: true,
    enum: ["Garbage", "Plastic", "Sewage", "Waste","pollution"]
  },
  status: {
    type: String,
    required: true,
    enum: ["Pending", "Resolved"],
    default: "Pending"
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Comment",
    default: []
  },
  escalatedAt: {
    type: Date,
    default: null
  }
}, { timestamps: true });

// Add 2dsphere index
postSchema.index({ location: "2dsphere" });

const Post = mongoose.model("Post", postSchema);

export default Post;
