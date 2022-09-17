import express from "express";
import {
  authUser,
  protectplusplus,
  registerUser,
  updateUserProfile
} from "../controllers/userController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/dashboard").post(protect)
router.route("/profile").post(protect, updateUserProfile);
router.route("/admin").post(protectplusplus, isAdmin);

export default router;
