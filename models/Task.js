import { v4 as uuidv4 } from 'uuid';

export class Task {

    id = '';
    desc = '';
    doneAt = null;

    constructor(desc) {
        this.id = uuidv4();
        this.desc = desc;
    }
}