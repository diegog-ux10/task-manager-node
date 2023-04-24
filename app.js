import colors from 'colors';
import { confirm, inquirerMenu, listTaskToDelete, pause, readInput, listTaskToCheck } from './helpers/inquirer.js';
import { Tasks } from './models/Tasks.js';
import { readDB, saveDB } from './helpers/saveFile.js';
 
const main = async () => {
  const tasks = new Tasks();
  const taskDB = readDB();
  
  if(taskDB) {
    tasks.createTasksListByArr(taskDB)
  }
  
  let opt = '';

  do {
    opt = await inquirerMenu();

    switch(opt) {
      case '1':
        const desc = await readInput('Description: ');
        tasks.createTask(desc);
      break;
      case '2':
        tasks.getAllTaskList();
      break;
      case '3':
        tasks.getTaskListByStatus(true)
      break;
      case '4':
        tasks.getTaskListByStatus(false) 
      break;
      case '5':
        const ids = await listTaskToCheck(tasks.listArr);
        tasks.toggleCompleted(ids);
        break;
      case '6':
        const id = await listTaskToDelete(tasks.listArr);
        if( id !== '0') {
          const deletedTask = tasks.listArr.filter(task => task.id === id);
          const ok = await confirm('Are You Sure?');
          if(ok){
            tasks.deleteTask(id)
            console.log(`Task ${deletedTask[0].desc} deleted`)
          }
        }
      break;
    }

    saveDB(tasks.listArr);

    await pause();

  } while (opt !== '0');

};
 
main();