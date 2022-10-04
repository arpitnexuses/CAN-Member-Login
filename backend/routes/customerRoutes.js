import express from "express";
import 
  { createCustomer, getCustomers }
 from "../controllers/customerController.js";
 import { protect } from "../middleware/authMiddleware.js";

 const router = express.Router();

router.route("/create").post(protect,createCustomer);
router.route("/").get(protect, getCustomers);


export default router;
