import mongoose, { connect } from "mongoose";
import User from '../models/user.model.js'
import { connectDb } from "../config/db.js";
connectDb();
const seedCommunities = [
    {
        fullName: "World Wildlife Fund (WWF)",
        email: "contact@wwf.org",
        role: "organisations",
        website: "https://www.worldwildlife.org/",
        password: "worldwildlifefund(wwf)"
    },
    {
        fullName: "Greenpeace",
        email: "info@greenpeace.org",
        role: "organisations",
        website: "https://www.greenpeace.org/",
        password: "greenpeace"
    },
    {
        fullName: "Friends of the Earth",
        email: "hello@foe.org",
        role: "organisations",
        website: "https://foe.org/",
        password: "friendsoftheearth"
    },
    {
        fullName: "The Nature Conservancy",
        email: "support@tnc.org",
        role: "organisations",
        website: "https://www.nature.org/",
        password: "thenatureconservancy"
    },
    {
        fullName: "Sierra Club",
        email: "membership@sierraclub.org",
        role: "organisations",
        website: "https://www.sierraclub.org/",
        password: "sierraclub"
    },
    {
        fullName: "Rainforest Alliance",
        email: "info@ra.org",
        role: "organisations",
        website: "https://www.rainforest-alliance.org/",
        password: "rainforestalliance"
    },
    {
        fullName: "350.org",
        email: "team@350.org",
        role: "organisations",
        website: "https://350.org/",
        password: "350.org"
    },
    {
        fullName: "Earthwatch Institute",
        email: "contact@earthwatch.org",
        role: "organisations",
        website: "https://earthwatch.org/",
        password: "earthwatchinstitute"
    }
];

async function seedDB() {
    await User.insertMany(seedCommunities);
    console.log("Database seeded!");
    mongoose.connection.close();
}
  
export default seedDB;