import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true

        },
        fullName:
        {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,

            minlength: 6
        },

        profilePic: {
            type: String,
            default: ""
        },
        role: {
            type: String,
            required: true,
            enum: ["admin", "user", "organisations"],
            default: "user"
        },
        location: {
            type: {
                type: String,
                enum: ['Point'],
                default: 'Point',
            },
            coordinates: {
                type: [Number], // [longitude, latitude]
                required: true,
            },
            address: String
        },
        points: {
            type: Number,
            default: 0
        },
        badges: {
            type: [String],
            default: [],
            enum: ['Eco Hero', 'Top Reporter']
        }

    }
    , { timestamps: true }
)
userSchema.index({ location: "2dsphere" });
const User = mongoose.model('User', userSchema);
export default User;    