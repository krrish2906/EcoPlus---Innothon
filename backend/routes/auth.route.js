import express from "express";
import {signup , login , logout , updateProfile , checkAuth} from '../controllers/auth.controller.js'
import {protectRoute} from '../middlewares/auth.middleware.js'
import {uploadProfilePic} from '../middlewares/upload.js'
import {getOrganisations} from '../controllers/auth.controller.js'
const router = express.Router();

router.post('/signup' ,signup );
router.post('/login' ,login );
router.post('/logout' ,logout );
router.put('/update',protectRoute  ,uploadProfilePic.single("profilePic") ,  updateProfile)
router.get('/check' , protectRoute, checkAuth)
router.get('/organisations'  , getOrganisations)




export default router

