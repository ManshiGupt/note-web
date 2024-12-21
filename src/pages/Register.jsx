import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { signUp } from "../services/authService";
import { toast } from "react-toastify";

const Register = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Input validation
    if (!firstName || !lastName || !emailId || !password) {
      toast.error("All fields are required!");
      return;
    }

    try {
      await signUp({firstName, lastName, emailId, password });
      toast.success("Registration successful! Please log in.");
      navigate("/login"); // Redirect to Login page
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed. Try again!"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Create an Account
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="name">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Name Input */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your lastName"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* emailId Input */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="emailId">
              emailId Address
            </label>
            <input
              id="emailId"
              type="emailId"
              placeholder="Enter your emailId"
              value={emailId}
              onChange={(e) => setemailId(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-500 hover:underline transition duration-200"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
