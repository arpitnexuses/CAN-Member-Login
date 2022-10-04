import express from "express";
import 
  { createCustomer, getCustomers, getAllCustomers}
 from "../controllers/customerController.js";
 import { protect } from "../middleware/authMiddleware.js";

 const router = express.Router();


router.route("/").get(protect,getAllCustomers);


export default router;