import axios from "axios";
import type { Card } from "@entities/model/tasks";

export const fetchTasks = () => axios.get("/api/tasks").then(res => res.data);

export const fetchOne = (id:number) => axios.get(`/api/tasks/${id}`).then(res => res.data)

export const createTask = async (task: Omit<Card, "id">): Promise<Card> => {
  return await axios.post("/api/tasks", task);
};

export const updateTask = async (id:number, task: Partial<Card>): Promise<Card> => {
  const response = await axios.patch(`/api/tasks/${id}`, task);
  return response.data;
};


export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`/api/tasks/${id}`);
};
