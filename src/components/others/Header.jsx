import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = ({ onLogout }) => {
  return (
    <motion.header
      className="header-3d flex justify-between items-center p-4 bg-gray-800 text-white rounded-xl shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="logo-3d font-bold text-2xl"
        whileHover={{ scale: 1.1, rotate: 3 }}
      >
        EMS
      </motion.div>

      <motion.h1
        className="title-3d text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Employee Management System
      </motion.h1>

      <motion.button
        className="logout-3d bg-red-500 px-4 py-2 rounded-lg text-white font-semibold"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 25px rgba(255,0,0,0.7)",
          backgroundColor: "#dc2626",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onLogout}
      >
        Log Out
      </motion.button>
    </motion.header>
  );
};

export default Header;
