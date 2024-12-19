// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// // Base API instance for cleaner configuration
// const api = axios.create({
//   baseURL: "http://localhost:3000/api/auth", // Base URL for all auth-related endpoints
// });

// // Sign Up a new user
// export const signUp = async (userData) => {
//   try {
//     const response = await api.post("/signup", userData); // POST /api/auth/signup
//     return response.data;
//   } catch (error) {
//     console.error("Error signing up:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // Log in an existing user
// export const login = async (credentials) => {
//   try {
//     const response = await api.post("/login", credentials); // POST /api/auth/login
//     return response.data;
//   } catch (error) {
//     console.error("Error logging in:", error.response?.data || error.message);
//     throw error;
//   }
// };

// // Log out the user
// export const logout = async () => {
//   try {
//     const response = await api.post("/logout"); // POST /api/auth/logout
//     return response.data;
//   } catch (error) {
//     console.error("Error logging out:", error.response?.data || error.message);
//     throw error;
//   }
// };
