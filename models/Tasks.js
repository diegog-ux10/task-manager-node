import { Task } from "./Task.js";

export class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    }

    createTask(desc) {
        const task = new Task(desc);
        this._list[task.id] = task
    }
}