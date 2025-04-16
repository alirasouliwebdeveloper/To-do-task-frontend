import React from "react";
import TaskTable from "./components/TaskTable";
import TaskForm from "./components/TaskForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [reloadFlag, setReloadFlag] = React.useState(0);
  const [editingTask, setEditingTask] = React.useState(null);

  const reloadTasks = () => {
    setReloadFlag((prev) => prev + 1);
    setEditingTask(null);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <ToastContainer position="top-right" autoClose={2000} />
      <TaskForm onTaskSaved={reloadTasks} initialData={editingTask} />
      <TaskTable key={reloadFlag} onEditTask={setEditingTask} />
    </div>
  );
}

export default App;
