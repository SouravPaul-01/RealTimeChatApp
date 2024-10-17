import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body; // get data from frontend
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    // check if user already exists
    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Take random profile photo (Avatar)
    const profilePhoto_boy = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const profilePhoto_girl = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    await User.create({
      fullName,
      userName,
      password: hashedPassword,
      profilePhoto: gender === "male" ? profilePhoto_boy : profilePhoto_girl,
      gender,
    });
    return res
      .status(201)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ userName });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        MaxAge: 1 * 24 * 60 * 60 * 1000,
        httponly: true,
        sameSite: "strict", // for security
      })
      .json({
        userId: user._id,
        userName: user.userName,
        fullName: user.fullName,
        profilePhoto: user.profilePhoto,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};
export const logout = (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { MaxAge: 0 })
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Middleware to check if the user is authenticated.
 * Retrieves other users excluding the logged-in user's information.
 */
export const getotherUsers = async (req, res) => {
  try {
    const loggedUser = req.id;
    const otherUsers = await User.find({ _id: { $ne: loggedUser } }).select(
      "-password"
    );
    return res.status(200).json(otherUsers);
  } catch (error) {
    console.log(error);
  }
};
