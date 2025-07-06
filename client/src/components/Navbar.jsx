import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="glass-effect sticky top-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3"
        >
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
            <img src={assets.logo_icon} alt="Logo" className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-gradient">Pixrai</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-secondary hover:text-white transition-colors font-medium">
            Home
          </a>
          <a href="/features" className="text-secondary hover:text-white transition-colors font-medium">
            Features
          </a>
          <a href="/buy" className="text-secondary hover:text-white transition-colors font-medium">
            Pricing
          </a>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-secondary hidden sm:block font-medium">{user.name}</span>
                <div className="flex items-center space-x-1 ml-2 px-2 py-1 rounded-lg bg-black/30">
                  <img src={assets.credit_star} alt="credits" className="w-4 h-4" />
                  <span className="text-white font-semibold text-sm">{user.creditBalance ?? credit}</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={logout}
                className="px-4 py-2 rounded-lg border border-gray-600 text-secondary hover:border-purple-500 hover:text-white transition-all font-medium"
              >
                Logout
              </motion.button>
            </>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowLogin(true)}
              className="px-6 py-2 rounded-lg btn-primary text-white font-medium hover-lift"
            >
              Get Started
            </motion.button>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
