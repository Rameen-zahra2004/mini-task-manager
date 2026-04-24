# 📝 Mini Task Manager (Full Stack MERN App)

A full-stack Task Manager application built using **React (Vite), Node.js, Express, and MongoDB**.  
It allows users to create, update, filter, delete, and manage tasks with a modern UI and drag-and-drop board.

---

## 🚀 Features

### 📌 Backend (REST API)

- GET /tasks → Fetch all tasks (with filtering)
- POST /tasks → Create new task
- PATCH /tasks/:id → Update task (status / priority)
- DELETE /tasks/:id → Delete task

---

## 📌 Task Model

Each task contains:

- id (MongoDB ObjectId)
- title (string)
- description (string)
- status (todo | in-progress | done)
- priority (low | medium | high)
- createdAt (timestamp)

---

## 🔍 Filtering Support

You can filter tasks using query parameters:
GET /tasks?status=todo&priority=high

---

## 🛡 Validation (Backend Middleware)

- Title is required
- Status must be: todo | in-progress | done
- Priority must be: low | medium | high
- Returns proper HTTP error messages

---

## 💻 Frontend Features

- 📋 Display all tasks in a list/board view
- 🎯 Priority badge + status display
- 🔍 Filter tasks without page reload
- ➕ Create task form with validation
- ✏ Inline status update (API synced)
- 🗑 Delete task with confirmation
- 📱 Fully responsive layout
- 🧲 Drag & Drop task board (columns)

---

## 🧱 Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- Axios
- dnd-kit (drag & drop)

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- REST API architecture

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash id="clone_repo"
git clone https://github.com/your-username/mini-task-manager.git
cd mini-task-manager
2️⃣ Backend Setup
cd server
npm install
npm run dev

Backend runs on:

http://localhost:5000
3️⃣ Frontend Setup
cd client
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🔗 API Connection

Frontend communicates with backend using Axios.

Base URL:

http://localhost:5000/api
Endpoints:
GET /tasks → fetch tasks
POST /tasks → create task
PATCH /tasks/:id → update task
DELETE /tasks/:id → delete task
🗄 Database Setup
MongoDB Atlas or Local MongoDB
Create .env file in backend:
MONGO_URI=your_mongodb_connection_string
PORT=5000
📂 Project Structure
mini-task-manager/
│
├── client/        # Frontend (React)
│   ├── components/
│   ├── pages/
│   └── App.jsx
│
├── server/        # Backend (Node + Express)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
✨ Highlights
Full CRUD functionality
REST API architecture
Drag & Drop task management
Real-time UI updates
Responsive design
Clean validation system
👨‍💻 Author

Rameen Zahra
Full Stack Developer  (MERN)
📌 Note

This project demonstrates:

API development
Frontend integration
Database management
UI/UX design