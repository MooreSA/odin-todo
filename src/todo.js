export class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.todos = [];
        this.id = Project.generateId();
    }

    static generateId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    addTodo(todoInfo) {
        const newTodo = new Todo(todoInfo);
        this.todos.push(newTodo);
    }

    updateProject(title, description) {
        this.title = title;
        this.description = description;
    }

    getTodo(todoId) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === parseInt(todoId)) {
                return this.todos[i]
            }
        }
        return false;
    }
}

export class Todo {
    constructor(todoInfo) {
        console.log(todoInfo);
        this.title = todoInfo.title;
        this.description = todoInfo.description;
        this.priority = todoInfo.priority;
        this.dueDate = new Date(todoInfo.dueDate);
        this.active = true;
        this.id = Todo.generateId();
    }

    static generateId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    updateTodo(todoInfo) {
        this.title = todoInfo.title;
        this.description = todoInfo.description;
        this.priority = todoInfo.priority;
        this.dueDate = new Date(todoInfo.dueDate);
    }

    toggleActive() {
        this.active = !this.active;
    }
}

export default {Project, Todo}