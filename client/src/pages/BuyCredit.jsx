import React, { useContext, useState } from "react";
import { plans, assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { toast } from "react-toastify";
import StripePayment from "../components/StripePayment";

const BuyCredit = () => {
  const { user, loadCreditsData } = useContext(AppContext);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  const handlePurchase = (plan) => {
    if (!user) {
      toast.error("Please login to purchase credits");
      return;
    }
    setSelectedPlan(plan);
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setSelectedPlan(null);
    loadCreditsData(); // Refresh credits
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span>✨</span>
            <span>Choose Your Plan</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
            Simple <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
            Choose the perfect plan for your creative needs. 
            All plans include unlimited access to our AI image generation.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${index === 1 ? 'scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg border border-white/10">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Card */}
              <div className={`glass-effect rounded-2xl p-8 h-full card-hover ${index === 1 ? 'border-2 border-purple-500' : ''}`}>
                {/* Plan Icon */}
                <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <img src={assets.logo_icon} alt="" className="w-8 h-8" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.id}</h3>
                <p className="text-muted mb-6">{plan.desc}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gradient">${plan.price}</span>
                    <span className="text-muted">/ one-time</span>
                  </div>
                  <p className="text-secondary mt-2">{plan.credits} credits included</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-secondary">
                    <div className="w-5 h-5 rounded-full bg-success-color flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    High-quality AI generation
                  </li>
                  <li className="flex items-center gap-3 text-secondary">
                    <div className="w-5 h-5 rounded-full bg-success-color flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Instant download
                  </li>
                  <li className="flex items-center gap-3 text-secondary">
                    <div className="w-5 h-5 rounded-full bg-success-color flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Commercial usage rights
                  </li>
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePurchase(plan)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    index === 1 
                      ? 'btn-primary text-white hover-lift' 
                      : 'btn-secondary hover-lift'
                  }`}
                >
                  {user ? "Purchase Now" : "Get Started"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-shadow">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-6 text-left">
              <h3 className="font-semibold mb-2 text-white">How do credits work?</h3>
              <p className="text-secondary">Each image generation uses 1 credit. Credits never expire and can be used anytime.</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-left">
              <h3 className="font-semibold mb-2 text-white">Can I use images commercially?</h3>
              <p className="text-secondary">Yes! All generated images come with full commercial usage rights.</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-left">
              <h3 className="font-semibold mb-2 text-white">What payment methods do you accept?</h3>
              <p className="text-secondary">We accept all major credit cards through our secure Stripe payment system.</p>
            </div>
            <div className="glass-effect rounded-xl p-6 text-left">
              <h3 className="font-semibold mb-2 text-white">Is there a refund policy?</h3>
              <p className="text-secondary">We offer a 30-day money-back guarantee if you're not satisfied.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Payment Modal */}
      {showPayment && selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-effect rounded-2xl p-8 max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">
              Purchase {selectedPlan.id} Plan
            </h2>
            <p className="text-secondary mb-6">
              {selectedPlan.credits} credits for ${selectedPlan.price}
            </p>
            <StripePayment
              plan={selectedPlan}
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BuyCredit;
