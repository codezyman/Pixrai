import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-shadow"
        >
          <span className="text-gradient">Transform</span> Your Ideas
          <br />
          Into <span className="text-gradient">Stunning</span> Images
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Create breathtaking visuals with AI-powered image generation. 
          Turn your imagination into reality with just a few words.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          {user ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/result'}
              className="px-8 py-4 rounded-xl btn-primary text-white font-semibold text-lg hover-lift neon-glow"
            >
              Start Creating Now
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLogin(true)}
              className="px-8 py-4 rounded-xl btn-primary text-white font-semibold text-lg hover-lift neon-glow"
            >
              Get Started Free
            </motion.button>
          )}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/buy'}
            className="px-8 py-4 rounded-xl btn-secondary font-semibold text-lg hover-lift"
          >
            View Pricing
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-xl p-6 card-hover">
            <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
            <div className="text-secondary">Images Generated</div>
          </div>
          <div className="glass-effect rounded-xl p-6 card-hover">
            <div className="text-3xl font-bold text-gradient mb-2">5K+</div>
            <div className="text-secondary">Happy Users</div>
          </div>
          <div className="glass-effect rounded-xl p-6 card-hover">
            <div className="text-3xl font-bold text-gradient mb-2">99%</div>
            <div className="text-secondary">Satisfaction Rate</div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        
      </div>
    </motion.section>
  );
};

export default Header;
