// import { useEffect, useState } from "react";
// import { getTasks } from "../services/api";
// import Column from "./Column";

// export default function TaskBoard() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const res = await getTasks({});
//       setTasks(res.data || []);
//     };

//     fetchTasks();
//   }, []);

//   // 🧠 group by status
//   const grouped = {
//     todo: tasks.filter((t) => t.status === "todo"),
//     "in-progress": tasks.filter((t) => t.status === "in-progress"),
//     done: tasks.filter((t) => t.status === "done"),
//   };

//   return (
//     <div className="flex gap-4 w-full max-w-5xl mx-auto mt-4">
//       <Column
//         title="Todo"
//         status="todo"
//         tasks={grouped.todo}
//         setTasks={setTasks}
//       />

//       <Column
//         title="In Progress"
//         status="in-progress"
//         tasks={grouped["in-progress"]}
//         setTasks={setTasks}
//       />

//       <Column
//         title="Done"
//         status="done"
//         tasks={grouped.done}
//         setTasks={setTasks}
//       />
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getTasks } from "../services/api";
import Column from "../components/colum";

export default function TaskBoard({ filters, refresh }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🚀 FETCH TASKS
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);

        const res = await getTasks({
          status: filters?.status || "",
          priority: filters?.priority || "",
        });

        const data = res.data;

        const normalized = Array.isArray(data)
          ? data
          : data?.tasks || data?.data || [];

        setTasks(normalized);
      } catch (err) {
        console.log("TaskBoard error:", err);
        setTasks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [filters?.status, filters?.priority, refresh]);

  // 🧠 GROUP TASKS BY STATUS
  const grouped = {
    todo: tasks.filter((t) => t.status === "todo"),
    "in-progress": tasks.filter((t) => t.status === "in-progress"),
    done: tasks.filter((t) => t.status === "done"),
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-4">
      {/* LOADING */}
      {loading && <p className="text-gray-500 mb-3">Loading tasks...</p>}

      {/* BOARD */}
      <div className="flex flex-col md:flex-row gap-4">
        <Column
          title="Todo"
          status="todo"
          tasks={grouped.todo}
          setTasks={setTasks}
        />

        <Column
          title="In Progress"
          status="in-progress"
          tasks={grouped["in-progress"]}
          setTasks={setTasks}
        />

        <Column
          title="Done"
          status="done"
          tasks={grouped.done}
          setTasks={setTasks}
        />
      </div>
    </div>
  );
}
