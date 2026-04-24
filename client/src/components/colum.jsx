import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import TaskCard from "./TaskCard";

export default function Column({ title, tasks, setTasks, status }) {
  // 🎯 better drag sensitivity
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
  );

  // 🔄 drag end handler
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = tasks.findIndex((t) => t._id === active.id);

    const newIndex = tasks.findIndex((t) => t._id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    const reordered = arrayMove(tasks, oldIndex, newIndex);

    // 🧠 update ONLY this column safely
    setTasks((prev) => {
      const otherColumns = prev.filter((t) => t.status !== status);

      return [...otherColumns, ...reordered];
    });
  };

  return (
    <div className="bg-gray-100 p-3 rounded w-full md:w-1/3">
      {/* COLUMN HEADER */}
      <h2 className="font-bold mb-3 text-center">{title}</h2>

      {/* DRAG AREA */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={tasks.map((t) => t._id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-2">
            {tasks.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
