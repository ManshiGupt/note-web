import axios from "axios";
import { BASE_URL } from "../utils/constants";
// Base API instance for cleaner configuration
const api = axios.create({
  baseURL: "http://localhost:3000/api/profile", // Base URL for all profile-related endpoints
});

// Fetch user profile
export const getProfile = async () => {
  try {
    const response = await api.get("/view",{
        withCredentials: true,
      }); 
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error.response?.data || error.message);
    throw error;
  }
};

// Edit user profile
export const editProfile = async (updates) => {
  try {
    const response = await api.patch("/edit", updates); // PATCH /api/profile/edit
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error.response?.data || error.message);
    throw error;
  }
};
