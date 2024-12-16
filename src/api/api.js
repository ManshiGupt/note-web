import axios from "axios";

const API_BASE_URL = "http://localhost";

// Axios instance
const axiosInstance = axios.create({
  baseURL: 5173,
  withCredentials: true, // Ensures cookies are sent for authentication
});

// Auth APIs
export const signup = (userData) => axiosInstance.post("/signup", userData);
export const login = (credentials) => axiosInstance.post("/login", credentials);
export const logout = () => axiosInstance.post("/logout");

// Notes APIs
export const fetchNotes = () => axiosInstance.get("/notes");
export const addNote = (note) => axiosInstance.post("/notes", note);
export const editNote = (id, note) => axiosInstance.put(`/notes/${id}`, note);
export const deleteNote = (id) => axiosInstance.delete(`/notes/${id}`);
