import inquirer from 'inquirer';
import colors from 'colors';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create Task`
            },
            {
                value: '2',
                name: `${'2.'.green} List Tasks`
            },
            {
                value: '3',
                name: `${'3.'.green} List Completed tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} List Pending Tasks`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete Task(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete Task`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            },
        ]
    }
]


export const inquirerMenu = async() => {
    console.clear();
    console.log('================='.green);
    console.log('  Select Option'.white);
    console.log('=================\n'.green);
    
    const {option} = await inquirer.prompt(questions);
    
    return option;
}

export const pause = async() => {
    const questions = [{
        type: 'input',
        message: `\nPress ${'ENTER'.green} to continue\n`,
        name: 'response'
    
    }]
    await inquirer.prompt(questions);
    return true
}

export const readInput = async(message) => {
    const questions = [{
        type: 'input',
        message: message,
        name: 'desc'
    
    }]
    const { desc } = await inquirer.prompt(questions);
    return desc
}

export const listTaskToDelete = async(task = []) => {
    const choices = task.map((task, i) => {
        const idx = i + 1;
        return {
            value: task.id,
            name: `${colors.green(idx)} ${task.desc}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancel'
    })

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete',
            choices
        }
    ]

    const {id} = await inquirer.prompt(questions);

    return id;
}

export const confirm = async(message) => {
    const questions = [{
        type: 'confirm',
        message,
        name: 'ok'
    }];
    const { ok } = await inquirer.prompt(questions);
    return ok;
}

export const listTaskToCheck = async(task = []) => {
    const choices = task.map((task, i) => {
        const idx = i + 1;
        return {
            value: task.id,
            name: `${colors.green(idx)} ${task.desc}`,
            checked: task.doneAt ? true : false
        }
    });

    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Select',
            choices
        }
    ]

    const {ids} = await inquirer.prompt(questions);

    return ids;
}