import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <nav className={`bg-gray-800 shadow-md ${darkMode ? "dark:bg-gray-900" : "bg-gray-800"}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold text-white hover:text-gray-300 transition duration-200"
        >
          NotesApp
        </Link>

        {/* Toggle Button for Mobile */}
        <div className="lg:hidden">
          <button
            type="button"
            className="text-gray-200 hover:text-white focus:outline-none"
            onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/dashboard"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="text-red-400 hover:text-red-500 transition duration-200"
          >
            Logout
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-300 hover:text-white transition duration-200"
          >
            {darkMode ? "🌙" : "🌞"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="hidden absolute top-full left-0 w-full bg-gray-800 lg:hidden"
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="text-red-400 hover:text-red-500 transition duration-200 text-left"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
