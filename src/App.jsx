// App.jsx
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);

  // initialize localStorage if not already set
  useEffect(() => {
    if (!localStorage.getItem("employee") || !localStorage.getItem("admin")) {
      setLocalStorage(); // initialize with default JSON
    }
  }, []);

  // handle login
  const handleLogin = (email, password) => {
    email = email.trim();
    password = password.trim();
    const { employee, admin } = getLocalStorage();
    const adminData = admin[0];
    const employeeList = employee[0].employees || [];

    // ✅ admin login
    if (email === adminData.email && password === adminData.password) {
      setUser({ role: "admin", ...adminData });
      return;
    }

    // ✅ employee login
    const matchedEmployee = employeeList.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (matchedEmployee) {
      setUser({
        role: "employee",
        ...matchedEmployee,
      });
    } else {
      alert("Invalid Credentials");
    }
  };

  // handle logout
  const handleLogout = () => setUser(null);

  // ✅ update employee task and preserve admin
  const handleUpdateEmployeeTask = (updatedTask) => {
    const { employee } = getLocalStorage();
    const admin = employee[0].admin; // keep admin safe
    const employees = employee[0].employees;

    const updatedEmployees = employees.map((emp) => {
      if (emp.email === user.email) {
        const updatedTasks = emp.tasks.map((t) =>
          t.id === updatedTask.id ? updatedTask : t
        );
        return { ...emp, tasks: updatedTasks };
      }
      return emp;
    });

    // ✅ save with admin + employees intact
    localStorage.setItem(
      "employee",
      JSON.stringify([{ admin, employees: updatedEmployees }])
    );

    const updatedUser = {
      ...user,
      tasks: updatedEmployees.find((e) => e.email === user.email).tasks,
    };
    setUser(updatedUser);
  };

  return (
    <AnimatePresence mode="wait">
      {!user && (
        <motion.div
          key="login"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <Login handleLogin={handleLogin} />
        </motion.div>
      )}

      {user?.role === "admin" && (
        <motion.div
          key="admin"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <AdminDashboard onLogout={handleLogout} />
        </motion.div>
      )}

      {user?.role === "employee" && (
        <motion.div
          key="employee"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <EmployeeDashboard
            user={user}
            onLogout={handleLogout}
            onUpdateTask={handleUpdateEmployeeTask}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
