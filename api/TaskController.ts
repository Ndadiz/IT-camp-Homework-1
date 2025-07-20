import { Request, Response } from "express";
import TaskService from "./TaskService.js";

class TaskController {
  async create(req: Request, res: Response) {
    try {
      const post = await TaskService.create(req.body);
      res.json(post);
    } catch (e: unknown) {
      const error = e as Error;
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const allPosts = await TaskService.getAll();
      res.json(allPosts);
    } catch (e: unknown) {
      const error = e as Error;
      res.status(500).json({ message: error.message });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const post = await TaskService.getOne(Number(req.params.id));
      res.json(post);
    } catch (e: unknown) {
      const error = e as Error;
      res.status(500).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const updates = req.body;
      const updated = await TaskService.update(id, updates);
      res.json(updated);
    } catch (e: unknown) {
      const error = e as Error;
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const deleted = await TaskService.delete(Number(req.params.id));
      res.json(deleted);
    } catch (e: unknown) {
      const error = e as Error;
      res.status(500).json({ message: error.message });
    }
  }
}

export default new TaskController();
