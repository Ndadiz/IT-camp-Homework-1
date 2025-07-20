// Класс — структура поста
class Task {
    constructor({ title, description, category, status, priority, date }) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.category = category;
        this.status = status;
        this.priority = priority;
        this.date = date;
    }
}
// Массив для хранения постов
const tasks = [];
// Экспортируем и массив, и класс
export { Task, tasks };
//# sourceMappingURL=Task.js.map