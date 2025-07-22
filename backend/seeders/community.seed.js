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
        password: "worldwildlifefund(wwf)",
        profilePic: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/WWF_logo.svg/1200px-WWF_logo.svg.png"
    },
    {
        fullName: "Greenpeace",
        email: "info@greenpeace.org",
        role: "organisations",
        website: "https://www.greenpeace.org/",
        password: "greenpeace",
        profilePic: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201504/green_story_650_040915065120.jpg?VersionId=9WRYGsj9Qkvw0oXTibaR6DJjvcjvXllo&size=690:388"
    },
    {
        fullName: "Friends of the Earth",
        email: "hello@foe.org",
        role: "organisations",
        website: "https://foe.org/",
        password: "friendsoftheearth",
        profilePic: "https://www.foei.org/wp-content/uploads/2021/10/FoE-India-logo.jpg"
    },
    {
        fullName: "The Nature Conservancy",
        email: "support@tnc.org",
        role: "organisations",
        website: "https://www.nature.org/",
        password: "thenatureconservancy",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNT_D3GqissNDTXbaeCdnBzp6yvuVxhoZC0Q&s"
    },
    {
        fullName: "Sierra Club",
        email: "membership@sierraclub.org",
        role: "organisations",
        website: "https://www.sierraclub.org/",
        password: "sierraclub",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoN3U-a2PE_qgdA0O6kaT9vrJLATKLwrjL-A&s"
    },
    {
        fullName: "Rainforest Alliance",
        email: "info@ra.org",
        role: "organisations",
        website: "https://www.rainforest-alliance.org/",
        password: "rainforestalliance",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8lCw4VODcFik5_ojj86GtfGx99iJEwZTIQ&s"
    },
    {
        fullName: "350.org",
        email: "team@350.org",
        role: "organisations",
        website: "https://350.org/",
        password: "350.org",
        profilePic: "https://yt3.googleusercontent.com/ytc/AIdro_mZx6oZQXa2Y0UzEhtwob1wjRaKxMKEiRRXE0eipcEu-VA=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        fullName: "Earthwatch Institute",
        email: "contact@earthwatch.org",
        role: "organisations",
        website: "https://earthwatch.org/",
        password: "earthwatchinstitute",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqlUBfClTy8ZpJUsFiiqefI2VjIIXKczjOQ&s"
    }
];

async function seedDB() {
    await User.insertMany(seedCommunities);
    console.log("Database seeded!");
    mongoose.connection.close();
}
  
export default seedDB;