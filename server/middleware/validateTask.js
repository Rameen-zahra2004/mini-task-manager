const validateTask = (req, res, next) => {
  const { title, status, priority } = req.body;

  // TITLE validation
  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Title is required",
    });
  }

  // STATUS validation (if provided)
  const validStatus = ["todo", "in-progress", "done"];
  if (status && !validStatus.includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid status value",
    });
  }

  // PRIORITY validation (if provided)
  const validPriority = ["low", "medium", "high"];
  if (priority && !validPriority.includes(priority)) {
    return res.status(400).json({
      success: false,
      message: "Invalid priority value",
    });
  }

  next();
};

module.exports = validateTask;
