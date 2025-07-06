import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="glass-effect mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <img src={assets.logo_icon} alt="Logo" className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-gradient">Pixrai</span>
            </div>
            <p className="text-secondary mb-6 max-w-md leading-relaxed">
              Transform your ideas into stunning images with AI-powered generation. 
              Create, inspire, and bring your imagination to life.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500 transition-colors ring-2 ring-white/30"
              >
                <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5 filter invert" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500 transition-colors ring-2 ring-white/30"
              >
                <img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5 filter invert" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500 transition-colors ring-2 ring-white/30"
              >
                <img src={assets.instagram_icon} alt="Instagram" className="w-5 h-5 filter invert" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-secondary hover:text-white transition-colors">Home</a></li>
              <li><a href="/buy" className="text-secondary hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#features" className="text-secondary hover:text-white transition-colors">Features</a></li>
              <li><a href="/result" className="text-secondary hover:text-white transition-colors">Generate</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © 2025 Pixrai. All rights reserved.
          </p>
          <p className="text-muted text-sm mt-2 md:mt-0">
            Made with ❤️ for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;