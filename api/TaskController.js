import TaskService from "./TaskService.js";
class TaskController {
    async create(req, res) {
        try {
            const post = await TaskService.create(req.body);
            res.json(post);
        }
        catch (e) {
            const error = e;
            res.status(500).json({ message: error.message });
        }
    }
    async getAll(req, res) {
        try {
            const allPosts = await TaskService.getAll();
            res.json(allPosts);
        }
        catch (e) {
            const error = e;
            res.status(500).json({ message: error.message });
        }
    }
    async getOne(req, res) {
        try {
            const post = await TaskService.getOne(Number(req.params.id));
            res.json(post);
        }
        catch (e) {
            const error = e;
            res.status(500).json({ message: error.message });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const updates = req.body;
            const updated = await TaskService.update(id, updates);
            res.json(updated);
        }
        catch (e) {
            const error = e;
            res.status(400).json({ message: error.message });
        }
    }
    async delete(req, res) {
        try {
            const deleted = await TaskService.delete(Number(req.params.id));
            res.json(deleted);
        }
        catch (e) {
            const error = e;
            res.status(500).json({ message: error.message });
        }
    }
}
export default new TaskController();
//# sourceMappingURL=TaskController.js.map