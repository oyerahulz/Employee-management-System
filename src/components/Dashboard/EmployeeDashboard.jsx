// components/Dashboard/EmployeeDashboard.jsx
import React from "react";
import Header from "../others/Header";
import AllTask from "../others/AllTask";
import { motion } from "framer-motion";

const EmployeeDashboard = ({ user, onLogout, onUpdateTask }) => {
  return (
    <div className="min-h-screen w-full bg-gray-900">
      {/* Fixed 3D Header */}
      <Header onLogout={onLogout} />

      {/* Content with top padding for header gap */}
      <div className="pt-[110px] px-10">
        {/* Employee Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 
                     backdrop-blur-lg border border-purple-400/40 
                     p-6 rounded-2xl shadow-2xl mb-10
                     hover:scale-105 hover:shadow-purple-500/40 
                     transition-all duration-300"
        >
          <h2 className="text-white text-3xl font-extrabold mb-2">
            👋 {user?.name || "Employee"}
          </h2>
          <p className="text-purple-200 text-lg font-medium mb-1">
            {user?.designation || "No Designation"}
          </p>
          <p className="text-indigo-200 text-sm">
            📧 {user?.email || "No Email"}
          </p>
        </motion.div>

        {/* Employee Task Section */}
        <AllTask
          tasks={user?.tasks || []}
          onUpdateTask={onUpdateTask}
          role="employee"
        />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
