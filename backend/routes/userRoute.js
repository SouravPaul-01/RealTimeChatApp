import express from "express";
import {
  getotherUsers,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

// @route   POST api/user/register --> register a new user(setting the route path to /api/user/register)
router.route("/register").post(register);

// @route   POST api/user/login --> login a user(setting the route path to /api/user/login)
router.route("/login").post(login);

// @route   GET  api/user/logout --> logout a user(setting the route path to /api/user/logout)
router.route("/logout").get(logout);

// @route   GET  api/user/isAuthenticated --> check if a user is authenticated
router.route("/").get(isAuthenticated, getotherUsers);

export default router;
