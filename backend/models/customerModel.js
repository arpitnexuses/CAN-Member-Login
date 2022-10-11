import mongoose from "mongoose";

const customerSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: false,
      default: ''
    },
    dateofbirth: {
      type: String,
      required: false,
      default: ''
    },
    gender: {
      type: String,
      required: false,
      default: ''
    },
    country: {
      type: String,
      required: false,
      default: ''
    },
    nationality: {
      type: String,
      required: false,
      default: ''
    },
    city: {
      type: String,
      required: false,
      default: ''
    },
    smoker: {
      type: "string",
      required: false,
      default: ''
    },
    coverageAmount: {
      type: Number,
      required: false,
      default: ''
    },
    paymentterm:{
      type: "string",
      required: false,
      default: ''
    },
    conditions: {
      type: "string",
      required: false,
      default: ''
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
    partner: {
      type: mongoose.Schema.Types.String,
      required: false,
      ref: "User",
    },
    quotedocument: {
      type: String,
      required: false,
      default: ''
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
