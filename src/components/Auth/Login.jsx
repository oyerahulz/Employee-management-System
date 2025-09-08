import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-[#121212] overflow-hidden">

      {/* Animated Background Glows */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-800 via-black to-indigo-900 opacity-30"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Light Orbs */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-500/20 rounded-full blur-2xl"
          style={{
            width: "80px",
            height: "80px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-sm w-full bg-[#1e1e1e]/80 backdrop-blur-lg rounded-2xl p-10 border border-cyan-400/30"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 text-center mb-6"
        >
          Employee Management
        </motion.h1>

        <form onSubmit={submitHandler} className="flex flex-col space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#2a2a2a] text-[#E0E0E0] placeholder[#888] placeholder-gray-400 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-[#2a2a2a] text-[#E0E0E0] placeholder[#888] placeholder-gray-400 rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,200,0.6)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-teal-400 text-[#1e1e1e] font-semibold rounded-full py-3 mt-4 cursor-pointer"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
