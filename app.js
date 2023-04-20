import colors from 'colors';
import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { Tasks } from './models/Tasks.js';
 
const main = async () => {
  const tasks = new Tasks();

  let opt = '';

  do {
    opt = await inquirerMenu();

    switch(opt) {
      case '1':
        const desc = await readInput('Description: ');
        tasks.createTask(desc);
      break;
      case '2':
        console.log(tasks._list);
      break;
      case '3':

      break;
      case '4':

      break;
      case '5':

      break;
      case '6':

      break;
    }
    await pause();
  } while (opt !== '0');

};
 
main();