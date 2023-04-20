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
                name: '1. Create Task'
            },
            {
                value: '2',
                name: '2. List Tasks'
            },
            {
                value: '3',
                name: '3. List Completed tasks'
            },
            {
                value: '4',
                name: '4. List Pending Tasks'
            },
            {
                value: '5',
                name: '5. Complete Task(s)'
            },
            {
                value: '6',
                name: '6. Delete Task'
            },
            {
                value: '0',
                name: '0. Exit'
            },
        ]
    }
]


export const inquirerMenu = async() => {
    console.clear();
    console.log('================='.green);
    console.log('  Select Option'.green);
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