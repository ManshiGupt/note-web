import axios from "axios";
import { BASE_URL } from "../utils/constants";
// Base API instance for cleaner configuration
const api = axios.create({
  baseURL: "http://localhost:3000/note", // Base URL for all note-related endpoints
});

// Fetch all notes
export const getNotes = async () => {
  try {
    const response = await axios.get("http://localhost:3000/note/view");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error.response?.data || error.message);
    throw error;
  }
};

// Create a new note
export const createNote = async (data) => {
  try {
    const response = await api.post("/", data); // Post to /api/note
    return response.data;
  } catch (error) {
    console.error("Error creating note:", error.response?.data || error.message);
    throw error;
  }
};

// Update an existing note
export const updateNote = async (id, updates) => {
  try {
    const response = await api.patch(`/edit/${id}`, updates); // Patch to /api/note/edit/:id
    return response.data;
  } catch (error) {
    console.error(`Error updating note (ID: ${id}):`, error.response?.data || error.message);
    throw error;
  }
};

// Delete a note by ID
export const deleteNote = async (id) => {
  try {
    const response = await api.delete(`/delete/${id}`); // Delete to /api/note/delete/:id
    return response.data;
  } catch (error) {
    console.error(`Error deleting note (ID: ${id}):`, error.response?.data || error.message);
    throw error;
  }
};
