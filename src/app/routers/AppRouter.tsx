import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TaskList from '@pages/list/TaskList';
import TaskDetails from '@pages/task/TaskDetails';
import { TasksContext } from '@shared/lib/tasks-context';
import type { Card } from '@entities/model/tasks';
import { useState } from "react";

function AppRouter() {
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

export default AppRouter;
