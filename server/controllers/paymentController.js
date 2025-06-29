import Stripe from "stripe";
import userModel from "../models/userModel.js";
import paymentModel from "../models/paymentModel.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (req, res) => {
  try {
    const { userId, planId } = req.body;

    if (!userId || !planId) {
      return res.status(400).json({
        success: false,
        message: "Missing details: userId or planId",
      });
    }

    // Validate Stripe configuration
    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({
        success: false,
        message: "Payment gateway not configured",
      });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Define plans (amounts in cents)
    const plans = {
      basic: { price: 1000, credits: 100, name: "Basic" }, // $10.00
      advanced: { price: 5000, credits: 500, name: "Advanced" }, // $50.00
      business: { price: 25000, credits: 5000, name: "Business" }, // $250.00
    };

    const plan = plans[planId.toLowerCase()];
    if (!plan) {
      return res.status(400).json({
        success: false,
        message: "Invalid plan selected",
      });
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: plan.price,
      currency: "usd",
      metadata: {
        userId: userId,
        planId: planId,
        credits: plan.credits.toString(),
      },
    });

    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      plan: {
        name: plan.name,
        credits: plan.credits,
        price: plan.price / 100, // Convert cents to dollars
      },
    });
  } catch (error) {
    console.error("Error in createPaymentIntent:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create payment intent",
    });
  }
};

export const confirmPayment = async (req, res) => {
  try {
    const { paymentIntentId, userId } = req.body;

    if (!paymentIntentId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Missing payment details",
      });
    }

    // Validate Stripe configuration
    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({
        success: false,
        message: "Payment gateway not configured",
      });
    }

    // Retrieve the payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({
        success: false,
        message: "Payment not completed",
      });
    }

    // Extract plan details from metadata
    const planId = paymentIntent.metadata.planId;
    const creditsToAdd = parseInt(paymentIntent.metadata.credits);

    // Update user's credit balance
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { creditBalance: user.creditBalance + creditsToAdd },
      { new: true }
    );

    // Save payment record
    const paymentRecord = new paymentModel({
      userId: userId,
      orderId: paymentIntent.id,
      paymentId: paymentIntent.latest_charge,
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      planId: planId,
      credits: creditsToAdd,
      status: "completed",
    });

    await paymentRecord.save();

    res.json({
      success: true,
      message: "Payment confirmed successfully",
      credits: updatedUser.creditBalance,
      paymentId: paymentIntent.latest_charge,
      orderId: paymentIntent.id,
    });
  } catch (error) {
    console.error("Error in confirmPayment:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to confirm payment",
    });
  }
};

export const getPaymentHistory = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Missing userId",
      });
    }

    const payments = await paymentModel
      .find({ userId })
      .sort({ createdAt: -1 })
      .limit(10);

    res.json({
      success: true,
      payments: payments,
    });
  } catch (error) {
    console.error("Error in getPaymentHistory:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to get payment history",
    });
  }
}; 