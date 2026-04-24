export default function Filters({ filters, setFilters }) {
  return (
    <div className="flex gap-3 mb-4">
      <select
        value={filters.status}
        onChange={(e) => setFilters((p) => ({ ...p, status: e.target.value }))}
        className="border p-2 rounded"
      >
        <option value="">All Status</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <select
        value={filters.priority}
        onChange={(e) =>
          setFilters((p) => ({ ...p, priority: e.target.value }))
        }
        className="border p-2 rounded"
      >
        <option value="">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button
        onClick={() => setFilters({ status: "", priority: "" })}
        className="bg-gray-500 text-white px-3 rounded"
      >
        Reset
      </button>
    </div>
  );
}
