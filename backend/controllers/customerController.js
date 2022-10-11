import Customer from "../models/customerModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

const createCustomer = asyncHandler(async (req, res) => {
  const { fullname, dateofbirth, gender, country, city, smoker, nationality, coverageAmount, paymentterm, conditions, quotedocument } = req.body;



    const customer = new Customer({user: req.user._id, partner: req.user.name, fullname, dateofbirth, gender, country, city, smoker, nationality, coverageAmount, paymentterm, conditions, quotedocument });
    
    const createdCustomer = await customer.save();

    res.status(201).json(createdCustomer);
  
});


const updateCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.customer._id);

  if (customer) {
    customer.quotedocument = req.body.quotedocument || customer.quotedocument;
    customer.fullname = req.body.fullname || customer.fullname;
    customer.dateofbirth = req.body.dateofbirth || customer.dateofbirth;
    customer.gender = req.body.gender || customer.gender;
    customer.country = req.body.country || customer.country;
    customer.city = req.body.city || customer.city;
    customer.nationality = req.body.nationality || customer.nationality;
    customer.smoker = req.body.smoker || customer.smoker;
    customer.coverageAmount = req.body.coverageAmount || customer.coverageAmount;
    customer.paymentterm = req.body.paymentterm || customer.paymentterm;
    customer.conditions = req.body.conditions || customer.conditions;



    const updatedCustomer = await customer.save();
    
    res.json({
      _id: updatedCustomer._id,
      quotedocument: updatedCustomer.quotedocument,
      fullname: updatedCustomer.fullname,
      dateofbirth: updatedCustomer.dateofbirth,
      gender: updatedCustomer.gender,
      country: updatedCustomer.country,
      city: updatedCustomer.city,
      nationality: updatedCustomer.nationality,
      smoker: updatedCustomer.smoker,
      paymentterm: updatedCustomer.paymentterm,
      conditions: updatedCustomer.conditions,
      coverageAmount: updatedCustomer.coverageAmount,

      token: generateToken(updatedCustomer._id),
    });
  } else {
    res.status(404);
    throw new Error("Customer Not Found");
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


export { createCustomer, getCustomers, DeleteCustomer , getAllCustomers, updateCustomer} ; 
