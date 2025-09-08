// utils/localStorage.js

// Default data
const employeeData = [
  {
    admin: {
      id: 1,
      name: "Admin User",
      designation: "Team Lead",
      email: "admin@example.com",
      password: "123",
      role: "admin",
      tasks: [],
      profileSummary: { total: 0, completed: 0, pending: 0, active: 0 }
    },
    employees: [
      {
        id: 1,
        name: "Rahul Chopra",
        designation: "Frontend Developer",
        email: "employee1@example.com",
        password: "123",
        tasks: [
          { id: 101, title: "Fix Login Bug", description: "Resolve login API error", date: "2025-09-02", category: "Development", status: "Pending" },
          { id: 102, title: "Write Unit Tests", description: "Add unit tests", date: "2025-09-03", category: "Testing", status: "Completed" }
        ]
      },
      {
        id: 2,
        name: "Sahil Kumar",
        designation: "UI/UX Designer",
        email: "employee2@example.com",
        password: "123",
        tasks: [
          { id: 201, title: "UI Enhancement", description: "Improve dashboard layout", date: "2025-09-01", category: "Design", status: "Active" }
        ]
      },
      {
        id: 3,
        name: "Priya Singh",
        designation: "Backend Developer",
        email: "employee3@example.com",
        password: "123",
        tasks: [
          { id: 301, title: "API Integration", description: "Integrate payment API", date: "2025-09-05", category: "Development", status: "Pending" }
        ]
      },
      {
        id: 4,
        name: "Anjali Verma",
        designation: "QA Engineer",
        email: "employee4@example.com",
        password: "123",
        tasks: [
          { id: 401, title: "Bug Fixes", description: "Fix UI alignment issues", date: "2025-09-07", category: "Testing", status: "Completed" }
        ]
      },
      {
        id: 5,
        name: "Rohit Negi",
        designation: "Full Stack Developer",
        email: "employee5@example.com",
        password: "123",
        tasks: [
          { id: 501, title: "Data Migration", description: "Migrate DB to cloud", date: "2025-09-09", category: "Database", status: "Pending" }
        ]
      }
    ]
  }
];

const adminData = [{ id: 1, email: "admin@example.com", password: "123" }];

// Save to localStorage
export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employeeData));
  localStorage.setItem("admin", JSON.stringify(adminData));
};

// Get from localStorage
export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem("employee"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employee, admin };
};
