import React, { useState } from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ onLogout }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), status: "Pending" };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((t) => t.id !== taskToDelete.id));
  };

  return (
    <div className="min-h-screen w-full p-10 bg-gray-900">
      <Header onLogout={onLogout} />
      <CreateTask addTask={addTask} />
      <AllTask
        tasks={tasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        role="admin"
      />
    </div>
  );
};

export default AdminDashboard;
