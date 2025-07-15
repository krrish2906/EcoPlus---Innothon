import multer from "multer";
import {postImageStorage, profileStorage} from "../config/cloudinary.js";

const uploadProfilePic = multer({storage : profileStorage});
const uploadPostImage = multer({storage : postImageStorage});

export {uploadProfilePic , uploadPostImage};
