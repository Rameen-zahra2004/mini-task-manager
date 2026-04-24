// import { useEffect, useState } from "react";
// import { getTasks } from "../services/api";
// import TaskItem from "./TaskItem";

// export default function TaskList({ filters }) {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         setLoading(true);

//         const res = await getTasks({
//           status: filters.status || "",
//           priority: filters.priority || "",
//         });

//         const data = res.data;

//         const normalized = Array.isArray(data)
//           ? data
//           : data?.tasks || data?.data || [];

//         setTasks(normalized);
//       } catch (err) {
//         console.log(err);
//         setTasks([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTasks();
//   }, [filters.status, filters.priority]);

//   return (
//     <div className="w-full max-w-2xl mx-auto mt-4">
//       <h2 className="text-xl font-bold mb-3">Tasks</h2>

//       {loading && <p className="text-gray-500">Loading...</p>}

//       {!loading && tasks.length === 0 && (
//         <p className="text-gray-500">No tasks found</p>
//       )}

//       {/* TASK GRID */}
//       <div className="space-y-3">
//         {tasks.map((task) => (
//           <TaskItem key={task._id} task={task} setTasks={setTasks} />
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import TaskItem from "./TaskItem";

export default function TaskList({ filters }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🚀 FETCH TASKS
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const res = await getTasks({
          status: filters.status || "",
          priority: filters.priority || "",
        });

        const data = res.data;

        // 🛡 SAFE NORMALIZATION
        const normalizedTasks = Array.isArray(data)
          ? data
          : Array.isArray(data?.tasks)
            ? data.tasks
            : Array.isArray(data?.data)
              ? data.data
              : [];

        setTasks(normalizedTasks);
      } catch (err) {
        console.log("Error fetching tasks:", err);
        setTasks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [filters.status, filters.priority]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-4">
      {/* HEADER */}
      <h2 className="text-xl font-bold mb-3">Tasks</h2>

      {/* LOADING STATE */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* EMPTY STATE */}
      {!loading && tasks.length === 0 && (
        <p className="text-gray-500">No tasks found</p>
      )}

      {/* TASK LIST */}
      <div className="space-y-3">
        {!loading &&
          tasks.map((task) => (
            <TaskItem key={task._id} task={task} setTasks={setTasks} />
          ))}
      </div>
    </div>
  );
}
