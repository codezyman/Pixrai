import express from "express";
import {
  createPaymentIntent,
  confirmPayment,
  getPaymentHistory,
} from "../controllers/paymentController.js";
import userAuth from "../middlewares/auth.js";

const paymentRouter = express.Router();

// Create a new payment intent
paymentRouter.post("/create-payment-intent", userAuth, createPaymentIntent);

// Confirm payment after successful transaction
paymentRouter.post("/confirm-payment", userAuth, confirmPayment);

// Get payment history
paymentRouter.get("/history", userAuth, getPaymentHistory);

export default paymentRouter; 