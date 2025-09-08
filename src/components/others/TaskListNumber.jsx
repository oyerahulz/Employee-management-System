import React from "react";
import { motion } from "framer-motion";

const TaskListNumber = () => {
  const cards = [
    { color: "from-red-500 to-pink-500", title: "New Tasks", count: 12 },
    { color: "from-green-400 to-emerald-500", title: "Completed", count: 8 },
    { color: "from-orange-400 to-yellow-500", title: "In Progress", count: 5 },
    { color: "from-purple-500 to-indigo-500", title: "Failed", count: 2 },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-12 tracking-wide">
        📊 Task Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.08, rotateX: 5, rotateY: -5 }}
            className={`rounded-3xl shadow-lg shadow-${card.color.split(" ")[0]}/40 bg-gradient-to-br ${card.color} p-8 text-center text-white transform transition-all duration-300`}
          >
            <h2 className="text-6xl font-extrabold drop-shadow-md mb-4">
              {card.count}
            </h2>
            <h3 className="text-2xl font-semibold tracking-wide">
              {card.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TaskListNumber;
