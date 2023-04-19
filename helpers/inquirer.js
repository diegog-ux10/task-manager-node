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
                name: 'Create Task'
            },
            {
                value: '2',
                name: 'List Tasks'
            },
            {
                value: '3',
                name: 'List Completed Task'
            },
            {
                value: '4',
                name: 'List Pending Task'
            },
            {
                value: '5',
                name: 'Complete Task(s)'
            },
            {
                value: '6',
                name: 'Delete Task'
            },
            {
                value: '0',
                name: 'Exit'
            },
        ]
    }
]

export const inquirerMenu = async() => {
    console.clear();
    console.log('================='.green);
    console.log('  Select Option'.green);
    console.log('=================\n'.green);

    const opt = await inquirer.prompt(questions);

    return opt;
}