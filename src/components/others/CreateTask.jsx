import React, { useState, useEffect } from "react";

const CreateTask = ({ addTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    name: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.name)
      return alert("Fill Task Title and Assign To");

    const newTask = {
      name: formData.name,
      title: formData.title,
      status: "Pending", // default
      date: formData.date,
      category: formData.category,
      description: formData.description,
    };

    addTask(newTask);

    // reset form
    setFormData({ title: "", date: "", name: "", category: "", description: "" });
  };

  // ✅ Rainfall effect
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

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-8">
      {/* Rain Overlay */}
      <div className="rain-overlay absolute inset-0 pointer-events-none"></div>

      {/* Floating Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>

      {/* Form with Gap from Top */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 mt-20 bg-gray-900/80 backdrop-blur-xl border border-gray-700 p-8 rounded-3xl shadow-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 transform hover:scale-[1.01] transition-transform duration-500"
      >
        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold">Task Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Write task here"
              className="bg-gray-800 text-white border border-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-gray-800 text-white border border-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold">Assign To</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Employee name"
              className="bg-gray-800 text-white border border-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Design, Dev, etc."
              className="bg-gray-800 text-white border border-gray-700 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col flex-grow">
            <label className="text-gray-300 mb-1 font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write task details..."
              className="bg-gray-800 text-white border border-gray-700 rounded-xl px-3 py-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 rounded-xl hover:shadow-[0_0_20px_rgba(34,197,94,0.7)] transition-all duration-300 cursor-pointer"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
