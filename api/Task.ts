export interface i_Task {
    id:number;
    title: string;
    description?: string;
    category: Category;
    status: Status;
    priority: Priority;
    date: string
}

type Category = "Bug" | "Feature" | "Documentation" | "Refactor" | "Test";
type Status = "To Do" | "In Progress" | "Done";
type Priority = "Low" | "Medium" | "High";

// Класс — структура поста
class Task {
    id: number;
    title: string;
    description?: string;
    category: Category;
    status: Status;
    priority: Priority;
    date: string;

    constructor({ title, description, category, status, priority, date }: i_Task) {
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
const tasks: Task[] = [];

// Экспортируем и массив, и класс
export { Task, tasks };