import { Router } from "express";
import TaskController from "./TaskController.js";
const router = Router();

router.post("/tasks", TaskController.create);
router.get("/tasks", TaskController.getAll);
router.get("/tasks/:id", TaskController.getOne);
router.patch("/tasks/:id", TaskController.update);
router.delete("/tasks/:id", TaskController.delete);

export default router;
