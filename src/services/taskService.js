import axios from "axios";

const API_BASE = "http://localhost:8000/api/tasks";

export const getTasks = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};

export const createTask = async (task) => {
  return await axios.post(API_BASE, task);
};

export const updateTask = async (id, task) => {
  return await axios.put(`${API_BASE}/${id}`, task);
};

export const deleteTask = async (id) => {
  return await axios.delete(`${API_BASE}/${id}`);
};
