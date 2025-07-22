import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Pollution", "Garbage", "Plastic", "Sewage", "Waste"],
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
    address: String,
  },
  imageUrl: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, { timestamps: true });

reportSchema.index({ location: "2dsphere" });

const Report = mongoose.model("Report", reportSchema);

export default Report;
