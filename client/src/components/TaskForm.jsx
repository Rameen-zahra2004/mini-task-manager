import { useState } from "react";
import { createTask } from "../services/api";

export default function TaskForm({ onTaskAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    status: "todo",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // validation
    if (!formData.title.trim()) {
      setError("Title is required");
      return;
    }

    try {
      setLoading(true);

      const res = await createTask(formData);

      // reset form
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        status: "todo",
      });

      // notify parent (no refetch needed)
      if (onTaskAdded) {
        onTaskAdded(res.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white p-4 rounded shadow mb-4"
    >
      <h2 className="text-xl font-bold mb-3">Create Task</h2>

      {/* ERROR MESSAGE */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* TITLE */}
      <input
        className="w-full border p-2 mb-2 rounded"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />

      {/* DESCRIPTION */}
      <textarea
        className="w-full border p-2 mb-2 rounded"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      {/* PRIORITY */}
      <select
        className="w-full border p-2 mb-2 rounded"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {/* STATUS */}
      <select
        className="w-full border p-2 mb-2 rounded"
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full text-white px-4 py-2 rounded ${
          loading ? "bg-gray-400" : "bg-blue-600"
        }`}
      >
        {loading ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}
