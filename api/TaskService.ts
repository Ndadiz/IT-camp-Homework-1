import { Task, tasks } from "./Task.js";
import type { i_Task } from "./Task.js";

class TaskService {
  async create(taskData: i_Task) {
    const createdPost = new Task(taskData);
    tasks.push(createdPost);
    return createdPost;
  }

  async getAll() {
    return tasks;
  }

  async getOne(id: number) {
    if (!id) throw new Error("Id не указан");
    const post = tasks.find((p) => p.id == id);
    return post;
  }

  async update(id: number, updates: Partial<i_Task>) {
    if (!id) throw new Error("ID не указан");
    const task = tasks.find((t) => t.id === id);
    if (!task) throw new Error("Задача не найдена");
    Object.assign(task, updates);
    return task;
  }

  async delete(id: number) {
    if (!id) throw new Error("Id не указан");
    const taskIndex = tasks.findIndex((t) => t.id === Number(id));
    if (taskIndex === -1) throw new Error("Пост не найден");
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    return deletedTask;
  }
}

export default new TaskService();
