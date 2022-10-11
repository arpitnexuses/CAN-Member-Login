import express from "express";
import { updateCustomer } from "../controllers/customerController.js";
 import { protect } from "../middleware/authMiddleware.js";

 const router = express.Router();



router.route("/").post(protect, updateCustomer)


export default router;