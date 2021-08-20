import showTasks from './showTasks.js';
import { setLocalStorage } from './setLocalStorage.js';
import getTasksFromLocalStorage from './getTasks.js';
// eslint-disable-next-line import/no-cycle
import setIndex from './index.js';

// Delete Tasks
const deleteTodo = (key) => {
  const tasks = getTasksFromLocalStorage();
  tasks.splice((key - 1), 1);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

export default deleteTodo;