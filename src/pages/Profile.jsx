import React, { useState, useEffect } from "react";
import { updateUser } from "../services/authService";

const Profile = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // You can pre-fill user data from a global state or API if required
    // Example:
    // setName(user.name);
    // setEmail(user.email);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser({ name, email });
    alert("Profile updated!");
  };

  return (
    <div className={`min-h-screen flex justify-center items-center py-10 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className={`bg-white rounded-lg shadow-xl w-full max-w-lg p-8 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h2 className={`text-3xl font-semibold text-center  mb-6`}>
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 mt-1 border ${darkMode ? "border-gray-600 text-white" : "border-gray-300 text-black"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className={`block text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-600"}`} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 mt-1 border ${darkMode ? "border-gray-600 text-white" : "border-gray-300 text-black"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
          </div>

          {/* Update Button */}
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;