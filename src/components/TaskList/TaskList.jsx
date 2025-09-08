import React from "react";
import { motion } from "framer-motion";
import "./TaskList.css"; // Keep same CSS for blobs & scrollbar

const tasks = [
  { color: "from-yellow-400 to-yellow-600", date: "20 Feb 2025", title: "Make a YouTube Video" },
  { color: "from-orange-400 to-red-500", date: "20 Feb 2025", title: "Team Meeting" },
  { color: "from-pink-400 to-pink-600", date: "20 Feb 2025", title: "Design UI" },
  { color: "from-red-300 to-pink-500", date: "20 Feb 2025", title: "Fix Bugs" },
  { color: "from-blue-400 to-indigo-500", date: "20 Feb 2025", title: "Deploy Project" },
  { color: "from-green-400 to-emerald-500", date: "20 Feb 2025", title: "Client Call" },
];

const TaskList = () => {
  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      
      {/* Floating blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900"></div>

      {/* Scrollable Task Cards */}
      <div className="relative z-10 p-10 h-full">
        <h1 className="text-white text-4xl font-bold mb-6">📜 Task List</h1>
        <div className="flex gap-6 h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide">
          {tasks.map((task, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`min-w-[200px] h-[220px] bg-gradient-to-br ${task.color} rounded-2xl shadow-2xl flex-shrink-0 snap-start p-4 flex flex-col justify-start`}
            >
              <h4 className="text-sm text-white/80">{task.date}</h4>
              <h2 className="mt-2 text-lg font-bold text-white">{task.title}</h2>
              <p className="mt-1 text-xs text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fugit, nobis eos? Nobis, nostrum.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
