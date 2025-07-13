import { createContext, useContext } from "react";
import type { Card } from '../data/tasks.tsx';

type TasksContextType = {
  items: { [id: number]: Card };
  setItems: React.Dispatch<React.SetStateAction<{ [id: number]: Card }>>;
};

export const TasksContext = createContext<TasksContextType | null>(null);

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error("useTasks must be used within a TasksProvider");
  }
  return context;
};
