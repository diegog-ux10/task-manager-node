import { Task } from "./Task.js";
import colors from 'colors';

export class Tasks {
    _list = {};

    constructor() {
        this._list = {};
    }

    deleteTask(id = '') {
        if(this._list[id]) {
            delete this._list[id]
        }
    }

    createTask(desc) {
        const task = new Task(desc);
        this._list[task.id] = task
    }

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach( key =>{
            const task = this._list[key];
            list.push(task)
        })
        return list
    }

    createTasksListByArr(taskArr = [])  {
        taskArr.forEach(task => {
            this._list[task.id] = task
        })
    }

    getAllTaskList() {
        let initialNumber = 1;
        console.log();
        for (let key in this._list){
            const task = this._list[key];
            console.log(`${colors.green(initialNumber + '.')} ${task.desc} :: ${task.doneAt ? "Done".green : "Pending".red}`);
            initialNumber += 1;
        }      
    }

    getTaskListByStatus(completed = true) {
        const taskArr = [];
        console.log();
        for (let key in this._list){
            const task = this._list[key];
            completed 
                ? task.doneAt 
                    ? taskArr.push([task.desc, task.doneAt])
                    : null 
                : !task.doneAt 
                    ? taskArr.push(task.desc)
                    : null 
        }

        let initialNumber = 1;
        taskArr.forEach((task) =>{
            console.log(`${colors.green(initialNumber + '.')} ${completed ? task[0] : task} :: ${completed ? colors.green(task[1]) : "Pending".red}`);
            initialNumber += 1;
        })
    }

    toggleCompleted( ids = [] ) {

        ids.forEach( id => {
            const task = this._list[id];
            if (!task.doneAt) {
                task.doneAt = new Date().toISOString();
            }
        });

        this.listArr.forEach(task => {
            if ( !ids.includes(task.id) ) {
                const taskToChange= this._list[task.id];
                taskToChange.doneAt =  null 
            }     
        })
    }
}