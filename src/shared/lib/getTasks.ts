import type { Card } from "@entities/model/tasks";

/**
 * 
 * @description Получает данные из localStorage 
 * 
 */
export const getTasksFromStorage = (): Record<string, Card> => {
  try {
    const stored = localStorage.getItem('tasks');
    if (!stored) {
      return {};
    }
    return JSON.parse(stored);
  } catch {
    return {};
  }
};