import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    dateofbirth: {
      type: "string",
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    smoker: {
      type: String,
      required: true,
    },
    coverageAmount: {
      type: Number,
      required: true,
    },
    paymentterm:{
      type: String,
      required: true,
    },
    conditions: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    partner: {
      type: mongoose.Schema.Types.String,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
