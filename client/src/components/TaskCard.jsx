// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

// export default function TaskCard({ task }) {
//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//     transition,
//     isDragging,
//   } = useSortable({
//     id: task._id,
//   });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition: transition || "transform 150ms ease",
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className={`
//         bg-white p-3 rounded shadow mb-2
//         cursor-grab active:cursor-grabbing
//         touch-none select-none
//         border
//         ${isDragging ? "opacity-50 scale-105" : "opacity-100"}
//       `}
//     >
//       {/* TITLE */}
//       <h3 className="font-semibold text-sm">{task.title}</h3>

//       {/* PRIORITY */}
//       <span className="text-xs text-gray-500">{task.priority}</span>
//     </div>
//   );
// }
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

export default function TaskCard({ task }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task._id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 150ms ease",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        bg-white p-3 rounded shadow mb-2
        border flex items-center gap-3
        hover:shadow-md transition
        ${isDragging ? "opacity-50 scale-105" : "opacity-100"}
      `}
    >
      {/* 🟢 DRAG HANDLE (VISIBLE) */}
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600"
      >
        <GripVertical size={18} />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <h3 className="font-semibold text-sm">{task.title}</h3>

        <span className="text-xs text-gray-500">{task.priority}</span>
      </div>
    </div>
  );
}
