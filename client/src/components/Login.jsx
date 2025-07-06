import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    setError("");
    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-md bg-black/50 flex justify-center items-center p-4">
      <motion.form
        onSubmit={onSubmitHandler}
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass-effect rounded-2xl p-8 max-w-md w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
            <img src={assets.logo_icon} alt="" className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            {state}
          </h1>
          <p className="text-gray-400">
            {state === "Login" ? "Welcome back! Please sign in to continue" : "Create your account to get started"}
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {error && (
            <div className="text-red-400 text-sm mb-2 text-center">{error}</div>
          )}
          {state !== "Login" && (
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <img src={assets.profile_icon} alt="" className="w-5 h-5" />
              </div>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Full Name"
                required
              />
            </div>
          )}

          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <img src={assets.email_icon} alt="" className="w-5 h-5" />
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Email address"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <img src={assets.lock_icon} alt="" className="w-5 h-5" />
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Password"
              required
            />
          </div>
        </div>

        {/* Forgot Password */}
        {state === "Login" && (
          <p className="text-purple-400 text-sm mt-4 cursor-pointer hover:text-purple-300 transition-colors">
            Forgot Password?
          </p>
        )}

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full mt-6 py-3 rounded-xl gradient-bg text-white font-semibold hover-lift"
        >
          {state === "Login" ? "Sign In" : "Create Account"}
        </motion.button>

        {/* Toggle State */}
        <div className="mt-6 text-center">
          {state === "Login" ? (
            <p className="text-gray-400">
              Don't have an account?{" "}
              <span
                className="text-purple-400 cursor-pointer hover:text-purple-300 transition-colors"
                onClick={() => setState("Sign Up")}
              >
                Sign up
              </span>
            </p>
          ) : (
            <p className="text-gray-400">
              Already have an account?{" "}
              <span
                className="text-purple-400 cursor-pointer hover:text-purple-300 transition-colors"
                onClick={() => setState("Login")}
              >
                Sign in
              </span>
            </p>
          )}
        </div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <img src={assets.cross_icon} alt="" className="w-6 h-6" />
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Login;
