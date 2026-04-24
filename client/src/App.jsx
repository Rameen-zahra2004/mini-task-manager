// import { useState } from "react";
// import TaskForm from "./components/TaskForm";
// import TaskList from "./components/TaskList";
// import Filters from "./components/Filter";

// function App() {
//   const [filters, setFilters] = useState({
//     status: "",
//     priority: "",
//   });

//   const [refresh, setRefresh] = useState(false);

//   const handleTaskAdded = () => {
//     setRefresh((prev) => !prev);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center p-4">
//       {/* MAIN CONTAINER */}
//       <div className="w-full max-w-3xl flex flex-col gap-4">
//         {/* HEADER */}
//         <div className="bg-white shadow rounded p-4 text-center">
//           <h1 className="text-2xl font-bold">Mini Task Manager</h1>
//           <p className="text-gray-500 text-sm">Manage tasks efficiently</p>
//         </div>

//         {/* CREATE TASK CARD */}
//         <div className="bg-white shadow rounded p-4">
//           <TaskForm onTaskAdded={handleTaskAdded} />
//         </div>

//         {/* FILTER CARD */}
//         <div className="bg-white shadow rounded p-4">
//           <Filters filters={filters} setFilters={setFilters} />
//         </div>

//         {/* TASK LIST CARD */}
//         <div className="bg-white shadow rounded p-4">
//           <TaskList filters={filters} refresh={refresh} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Filters from "./components/Filter";
import TaskBoard from "./components/TaskBoard";

function App() {
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
  });

  const [refresh, setRefresh] = useState(false);

  const handleTaskAdded = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      {/* MAIN WRAPPER */}
      <div className="w-full max-w-7xl flex flex-col gap-4">
        {/* HEADER */}
        <div className="bg-white shadow rounded-lg p-5 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Mini Task Manager
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Drag & Drop Task Board System
          </p>
        </div>

        {/* TOP SECTION (FORM + FILTERS SIDE BY SIDE ON DESKTOP) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* CREATE TASK */}
          <div className="bg-white shadow rounded-lg p-4">
            <TaskForm onTaskAdded={handleTaskAdded} />
          </div>

          {/* FILTERS */}
          <div className="bg-white shadow rounded-lg p-4">
            <Filters filters={filters} setFilters={setFilters} />
          </div>
        </div>

        {/* TASK BOARD */}
        <div className="bg-white shadow rounded-lg p-4">
          <TaskBoard filters={filters} refresh={refresh} />
        </div>
      </div>
    </div>
  );
}

export default App;
