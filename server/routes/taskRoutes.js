const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const validateTask = require("../middleware/validateTask");

// =========================
// TASK ROUTES
// =========================

// GET all tasks (with filters)
router.get("/", getTasks);

// CREATE new task
router.post("/", validateTask, createTask);

// UPDATE task by ID
router.patch("/:id", validateTask, updateTask);

// DELETE task by ID
router.delete("/:id", deleteTask);

module.exports = router;
