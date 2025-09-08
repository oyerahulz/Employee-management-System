import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AllTask = ({ tasks, onUpdateTask, onDeleteTask, role, user }) => {
  const [selectedTask, setSelectedTask] = useState(null);

  // Rain Effect
  useEffect(() => {
    const rainContainer = document.querySelector(".rain-overlay");
    if (rainContainer && rainContainer.children.length === 0) {
      for (let i = 0; i < 60; i++) {
        const drop = document.createElement("div");
        drop.className = "drop";
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${Math.random() * 0.7 + 0.5}s`;
        rainContainer.appendChild(drop);
      }
    }
  }, []);

  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  const pending = tasks.filter(t => t.status === "Pending").length;
  const failed = tasks.filter(t => t.status === "Failed").length;
  const active = tasks.filter(t => t.status === "Active").length;

  const handleComplete = () => {
    if (selectedTask) {
      onUpdateTask({ ...selectedTask, status: "Completed" });
      setSelectedTask(null);
    }
  };

  const handleDelete = () => {
    if (selectedTask && onDeleteTask) {
      onDeleteTask(selectedTask);
      setSelectedTask(null);
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      <div className="rain-overlay"></div>

      {/* Task Stats */}
      <div className="mt-6 mb-16 grid grid-cols-2 md:grid-cols-4 gap-10 px-8">
        {[
          { label: "Pending", value: pending, color: "from-yellow-500 to-orange-500" },
          { label: "Completed", value: completed, color: "from-green-500 to-emerald-500" },
          { label: "Failed", value: failed, color: "from-red-500 to-pink-600" },
          { label: "Active", value: active, color: "from-blue-500 to-indigo-500" }
        ].map((box, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-br ${box.color} p-8 rounded-2xl text-white text-center shadow-lg`}
          >
            <h3 className="text-4xl font-bold">{box.value}</h3>
            <p className="text-sm mt-2 uppercase">{box.label}</p>
          </motion.div>
        ))}
      </div>

      {/* All Tasks */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
        {tasks.map(task => (
          <motion.div
            key={task.id}
            whileHover={{ scale: 1.07 }}
            onClick={() => setSelectedTask(task)}
            className="relative bg-gray-800 text-white p-6 rounded-2xl shadow-lg cursor-pointer border border-white/20"
          >
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p className="text-gray-400 mt-2">{task.description}</p>
            <p className="text-sm mt-2 text-gray-500">📅 {task.date}</p>
            <span
              className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full shadow-lg ${
                task.status === "Completed"
                  ? "bg-green-500/30 text-green-200 border border-green-400/50"
                  : task.status === "Pending"
                  ? "bg-yellow-500/30 text-yellow-200 border border-yellow-400/50"
                  : task.status === "Failed"
                  ? "bg-red-500/30 text-red-200 border border-red-400/50"
                  : "bg-blue-500/30 text-blue-200 border border-blue-400/50"
              }`}
            >
              {task.status}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl max-w-md w-full border border-white/20"
          >
            <h2 className="text-2xl font-bold">{selectedTask.title}</h2>
            <p className="mt-3 text-gray-300">{selectedTask.description}</p>
            <p className="mt-2 text-sm">📅 {selectedTask.date}</p>
            <p className="mt-2"><span className="font-bold">Status:</span> {selectedTask.status}</p>

            <div className="mt-6 flex justify-end gap-4">
              {selectedTask.status !== "Completed" && (
                <button
                  onClick={handleComplete}
                  className="px-5 py-2 bg-green-600 rounded-lg hover:bg-green-700 shadow-lg shadow-green-500/50"
                >
                  ✅ Mark Complete
                </button>
              )}

              {role === "admin" && (
                <button
                  onClick={handleDelete}
                  className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700 shadow-lg shadow-red-500/50"
                >
                  🗑 Delete
                </button>
              )}

              <button
                onClick={() => setSelectedTask(null)}
                className="px-5 py-2 bg-gray-600 rounded-lg hover:bg-gray-700 shadow-lg"
              >
                ❌ Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AllTask;
