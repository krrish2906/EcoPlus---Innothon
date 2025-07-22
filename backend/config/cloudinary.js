import {v2 as cloudinary} from "cloudinary";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

const profileStorage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : {
        folder : "profile_pics",
        allowed_formats : ["jpg" , "jpeg" , "png" , "webp"],
        transformations : [
            {
                width : 300,
                height : 300,
                crop : "limit"
            }
        ]
    }
})

const postImageStorage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : {
        folder : "post_images",
        allowed_formats : ["jpg" , "jpeg" , "png" , "webp"],
      
    }
})

export {profileStorage , postImageStorage, cloudinary}