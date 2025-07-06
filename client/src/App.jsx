import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import Features from "./pages/Features";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { showLogin } = useContext(AppContext);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="min-h-screen">
      <ToastContainer 
        position="bottom-right" 
        theme="dark"
        toastStyle={{
          background: '#1a1a1a',
          color: '#ffffff',
          border: '1px solid #333333'
        }}
      />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
