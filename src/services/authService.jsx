import axios from "axios";
import { BASE_URL } from "../utils/constants";

import { myServerUrl } from '../support/api-helper';
// Base API instance for cleaner configuration
const api = axios.create({
  baseURL: "http://localhost:3000", // Base URL for all auth-related endpoints
});

// Sign Up a new user
export const signUp = async (userData) => {
  try {
    const response = await api.post("/signup", userData); // POST /api/auth/signup
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error.response?.data || error.message);
    throw error;
  }
};

// Log in an existing user
export const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials); // POST /api/auth/login
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error;
  }
};

// Log out the user
export const logout = async () => {
  try {
    const response = await api.post("/logout"); // POST /api/auth/logout
    return response.data;
  } catch (error) {
    console.error("Error logging out:", error.response?.data || error.message);
    throw error;
  }
};



export const tokenVerificationApi = async () => {
    try {
        // Get the token from local storage
        const token = localStorage.getItem('token');

        // Check if token exists
        if (!token) {
            // Handle case where token is missing
            console.log('Token missing');
            // Redirect to login page
            window.location.href = '/login'; // Change '/login' to the actual URL of your login page
            return;
        }

        // Set authorization header with the token
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        // Make the API request with the token
        const response = await axios.post(`${myServerUrl.url}/validate-token`, null, config); // Send null as request body
        return response.data;
        
    } catch (error) {
        console.log('error while calling token verification API', error);
       
    }
};

