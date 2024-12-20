import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/authService";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Input validation
    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    try {
      await signUp({ name, email, password });
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
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
