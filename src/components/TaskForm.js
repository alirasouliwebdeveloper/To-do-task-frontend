// src/components/TaskForm.js
import React, { useState, useEffect } from "react";
import { createTask, updateTask } from "../services/taskService";
import { toast } from "react-toastify";

const TaskForm = ({ onTaskSaved, initialData = null }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDueDate(initialData.due_date || "");
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (initialData) {
        await updateTask(initialData.id, { title, due_date: dueDate, status });
        toast.success("Task updated successfully!");
      } else {
        await createTask({ title, due_date: dueDate, status });
        toast.success("Task created successfully!");
      }

      setTitle("");
      setDueDate("");
      setStatus("pending");
      if (onTaskSaved) onTaskSaved();
    } catch (err) {
      toast.error("Failed to save task!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? "Edit Task" : "Add New Task"}
      </h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Due Date</label>
        <input
          type="date"
          className="w-full border rounded px-3 py-2"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Status</label>
        <select
          className="w-full border rounded px-3 py-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Saving..." : initialData ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
