import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const StripePayment = ({ plan, onSuccess, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [stripe, setStripe] = useState(null);
  const [elements, setElements] = useState(null);
  const [cardElement, setCardElement] = useState(null);

  useEffect(() => {
    // Load Stripe
    const loadStripe = async () => {
      if (window.Stripe) {
        const stripeInstance = window.Stripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
        setStripe(stripeInstance);
        
        // Create elements
        const elementsInstance = stripeInstance.elements();
        setElements(elementsInstance);
        
        // Create card element
        const card = elementsInstance.create('card', {
          style: {
            base: {
              fontSize: '16px',
              color: '#ffffff',
              '::placeholder': {
                color: '#a0a0a0',
              },
              backgroundColor: 'transparent',
            },
            invalid: {
              color: '#ff6b6b',
            },
          },
        });
        
        card.mount('#card-element');
        setCardElement(card);
      }
    };

    loadStripe();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !cardElement) {
      setLoading(false);
      return;
    }

    try {
      // Create payment intent
      const { data: intentData } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/payment/create-payment-intent`,
        {
          planId: plan.id.toLowerCase(),
        },
        {
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          },
        }
      );

      if (!intentData.success) {
        toast.error(intentData.message);
        setLoading(false);
        return;
      }

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        intentData.clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );

      if (error) {
        toast.error(error.message);
        setLoading(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        // Confirm payment on backend
        const { data: confirmData } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/payment/confirm-payment`,
          {
            paymentIntentId: paymentIntent.id,
          },
          {
            headers: { 
              Authorization: `Bearer ${localStorage.getItem("token")}` 
            },
          }
        );

        if (confirmData.success) {
          toast.success(`Payment successful! ${plan.credits} credits added to your account.`);
          onSuccess();
        } else {
          toast.error(confirmData.message);
        }
      }
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
        <div id="card-element"></div>
      </div>
      
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-4 py-3 border border-gray-600 rounded-xl text-gray-300 hover:border-purple-500 hover:text-white transition-all"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="flex-1 px-4 py-3 gradient-bg text-white rounded-xl font-semibold hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Processing..." : `Pay $${plan.price}`}
        </button>
      </div>
    </form>
  );
};

export default StripePayment; 