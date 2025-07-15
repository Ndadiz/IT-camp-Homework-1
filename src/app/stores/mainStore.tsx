import { createStore, createEvent } from "effector";
import type { Card } from "@entities/model/tasks";
import {getTasksFromStorage} from "@shared/lib/getTasks"


// События для управления задачами
export const addTask = createEvent<{ id: string; task: Card }>();
export const updateTask = createEvent<{ id: string; task: Partial<Card> }>();
export const removeTask = createEvent<string>();

// Основной стор с задачами
export const $tasks = createStore(getTasksFromStorage())
  .on(addTask, (state, { id, task }) => {
    const newState = { ...state, [id]: task };
    localStorage.setItem('tasks', JSON.stringify(newState));
    return newState;
  })
  .on(updateTask, (state, { id, task }) => {
    const newState = {
      ...state,
      [id]: { ...state[id], ...task }
    };
    localStorage.setItem('tasks', JSON.stringify(newState));
    return newState;
  })
  .on(removeTask, (state, id) => {
    const newState = { ...state };
    delete newState[id];
    localStorage.setItem('tasks', JSON.stringify(newState));
    return newState;
  });