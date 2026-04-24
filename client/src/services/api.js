import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// OPTIONAL (bonus requirement: API KEY auth support)
API.interceptors.request.use((config) => {
  config.headers["x-api-key"] = "your-hardcoded-key"; // if you implement auth later
  return config;
});

// GLOBAL RESPONSE HANDLING (clean production practice)
API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API Error:", err.response?.data || err.message);
    return Promise.reject(err);
  },
);

// ===================== TASKS =====================

// GET tasks (supports filtering via query later)
export const getTasks = (params) => API.get("/tasks", { params });

// CREATE task
export const createTask = (data) => API.post("/tasks", data);

// UPDATE task
export const updateTask = (id, data) => API.patch(`/tasks/${id}`, data);

// DELETE task
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
