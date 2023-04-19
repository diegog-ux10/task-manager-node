require('colors');

const showMenu= () => {
    return new Promise( resolve => {

        console.clear();
        console.log('================='.green);
        console.log('  Select Option'.green);
        console.log('=================\n'.green);
    
        console.log(`${'1.'.green} Create Task`);
        console.log(`${'2.'.green} List Tasks`);
        console.log(`${'3.'.green} List Completed Task`);
        console.log(`${'4.'.green} List Pending Task`);
        console.log(`${'5.'.green} Complete Task(s)`);
        console.log(`${'6.'.green} Delete Task`);
        console.log(`${'0.'.green} Exit`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Select an Option: ', (opt) => {
            readline.close();
            resolve(opt);
        })
    });
}

const pause =  () => {
    return new Promise(resole =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPress ${'ENTER'.green} to continue\n`, () => {
            readline.close();
            resolve();
        })
    })
}

module.exports= {
    showMenu,
    pause
}