import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import "./index.css"; // Tailwind or Bootstrap

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Check for dark mode preference on page load
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
  }, []);

  // Toggle Dark Mode and save preference in localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode); // Save preference in localStorage
  };

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<Dashboard darkMode={darkMode} />}
          />
          <Route path="/profile" element={<Profile darkMode={darkMode} />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// import React from 'react'
// import Dashboard from "./pages/Dashboard"
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import Profile from './pages/Profile'
// import { useState } from 'react'
// import { useEffect } from 'react'
// const App = () => {

//   const [darkMode, setDarkMode] = useState(false);

//   // Check for dark mode preference on page load
//   useEffect(() => {
//     const savedDarkMode = localStorage.getItem("darkMode") === "true";
//     setDarkMode(savedDarkMode);
//   }, []);

//   // Toggle Dark Mode and save preference in localStorage
//   const toggleDarkMode = () => {
//     const newDarkMode = !darkMode;
//     setDarkMode(newDarkMode);
//     localStorage.setItem("darkMode", newDarkMode); // Save preference in localStorage
//   };
  
//   return (
//     <div>
//       {/* <Dashboard/> */}
//       {/* <Login/> */}
//       {/* <Register/> */} 
//       <Profile darkMode={darkMode}/>
//     </div>
//   )
// }

// export default App
