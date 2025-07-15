import type { Card } from "@entities/model/tasks";

const initialTasks: Record<string, Card> = {
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
};

export const getTasksFromStorage = (): Record<string, Card> => {
  try {
    const stored = localStorage.getItem('tasks');
    if (!stored) {
      // Если данных нет, сохраняем начальные данные
      localStorage.setItem('tasks', JSON.stringify(initialTasks));
      return initialTasks;
    }
    return JSON.parse(stored);
  } catch {
    return initialTasks;
  }
};