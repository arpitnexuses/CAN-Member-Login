import Customer from "../models/customerModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

const createCustomer = asyncHandler(async (req, res) => {
  const { fullname, dateofbirth, gender, country, city, smoker, nationality, coverageAmount, paymentterm, conditions } = req.body;


  if (!fullname || !dateofbirth || !gender || !country || !city || !smoker || !nationality || !coverageAmount || !paymentterm || !conditions) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
  } else {
    const customer = new Customer({user: req.user._id, partner: req.user.name, fullname, dateofbirth, gender, country, city, smoker, nationality, coverageAmount, paymentterm, conditions });
    
    const createdCustomer = await customer.save();

    res.status(201).json(createdCustomer);
  }
});




const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({ user: req.user._id });
  res.json(customers);
});

const getAllCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find(req.params.id);
  res.json(customers);
});


const DeleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (customer.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (customer) {
    await customer.remove();
    res.json({ message: "Customer Removed" });
  } else {
    res.status(404);
    throw new Error("Customer not Found");
  }
});


export { createCustomer, getCustomers, DeleteCustomer , getAllCustomers} ; 
