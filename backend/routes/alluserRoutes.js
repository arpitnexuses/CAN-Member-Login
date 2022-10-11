import express from "express";
import { updateCustomer } from "../controllers/customerController.js";
import 
  { getAllUsers }
 from "../controllers/userController.js";
 import { protect } from "../middleware/authMiddleware.js";

 const router = express.Router();


router.route("/").get(protect,getAllUsers);


export default router;