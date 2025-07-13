import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TaskList from './pages/TaskList.tsx'
import TaskDetails from './pages/TaskDetails.tsx';
import { TasksContext } from "./context/TasksContext";
import type { Card } from './data/tasks.tsx';
import { useState } from "react";

function App() {
  const [items, setItems] = useState<{ [id: number]: Card }>({
    1: {
      title: "Fix login bug",
      description: "Users are unable to log in with their credentials.",
      category: "Bug",
      status: "To Do",
      priority: "High",
    },
    2: {
      title: "Add new feature for user profiles",
      description: "Implement user profile management.",
      category: "Feature",
      status: "In Progress",
      priority: "Medium",
    },
    3: {
      title: "Update documentation for API endpoints",
      category: "Documentation",
      status: "Done",
      priority: "Low",
    },
  });
  return (
    <TasksContext.Provider value={{ items, setItems }}>
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
    </TasksContext.Provider>
  );
}

export default App;
