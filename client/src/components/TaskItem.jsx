import { useState } from "react";
import { updateTask, deleteTask } from "../services/api";

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [loading, setLoading] = useState(false);

  // 🔄 STATUS CHANGE
  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;

    try {
      setLoading(true);

      const res = await updateTask(task._id, {
        status: newStatus,
      });

      onUpdate?.(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 🗑 DELETE TASK
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?",
    );

    if (!confirmDelete) return;

    try {
      setLoading(true);

      await deleteTask(task._id);

      onDelete?.(task._id);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      {/* LEFT SIDE */}
      <div className="flex-1">
        {/* TITLE */}
        <h3 className="font-semibold text-lg">{task.title}</h3>

        {/* PRIORITY BADGE */}
        <span
          className={`inline-block mt-2 px-2 py-1 text-xs rounded text-white ${
            task.priority === "high"
              ? "bg-red-500"
              : task.priority === "medium"
                ? "bg-yellow-500"
                : "bg-green-500"
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2">
        {/* STATUS SELECT */}
        <select
          value={task.status}
          onChange={handleStatusChange}
          disabled={loading}
          className="border p-1 rounded text-sm"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        {/* DELETE BUTTON */}
        <button
          onClick={handleDelete}
          disabled={loading}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
