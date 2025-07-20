
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import { generateToken } from '../config/utils.js';
import {cloudinary} from '../config/cloudinary.js'


export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        if (password.length < 6) {
            return res.status(400).json({ message: "The password must be more than 6 letters" })
        }

        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName: fullName,
            password: hashedPassword,
            email: email
        })

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();
            return res.status(201).json({ _id: newUser._id, fullName: newUser.fullName, email: newUser.email, profilePic: newUser.profilePic })
        }
        else {
            return res.status(400).json({ message: "invalid user data" })
        }

    } catch (error) {
        console.log(
            "Error in signup controller ", error.message
        )
        return res.status(500).json({ message: "Internal  Server Error" })
    }

}
export const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "The user does not exist " })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid credentials " })
        }

        generateToken(user._id, res);
        return res.status(200).json({ _id: user._id, fullName: user.fullName, email: user.email, profilePic: user.profilePic })


    } catch (error) {
            console.log("Error in the login controller" , error.message);

            return res.status(500).json({ message: "Internal  Server Error" })
    }

}
export const logout = (req, res) => {
    try {
        res.cookie("jwt" , "" , {maxAge : 0});
        return res.status(200).json({message : "logged out successfully"})
    } catch (error) {
         console.log("Error in the login controller" , error.message);

            return res.status(500).json({ message: "Internal  Server Error" })
    }

}

export const updateProfile = async (req, res) => {
    try {
      const userId = req.user._id;
  
      if (!req.file) {
        return res.status(400).json({ message: "Profile picture is required" });
      }
  
      const imageUrl = req.file.path; // Cloudinary URL
  
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { profilePic: imageUrl },
        { new: true }
      );
  
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Error in updateProfile:", error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

export const checkAuth=  async(req, res)=>{
    try {
        return res.status(200).json(req.user)
    } catch (error) {
        console.log("Error in the checkAuth controller" , error.message);

            return res.status(500).json({ message: "Internal  Server Error" })
    }

}