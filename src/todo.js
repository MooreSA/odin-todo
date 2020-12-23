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
}

export class Todo {
    constructor(todoInfo) {
        this.title = todoInfo.title;
        this.description = todoInfo.description;
        this.priority = todoInfo.priority;
        this.dueDate = todoInfo.dueDate;
        this.active = todoInfo.active;
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
        this.dueDate = todoInfo.dueDate;
        this.active = todoInfo.active;
    }
}

export default {Project, Todo}