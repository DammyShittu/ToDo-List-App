import showTasks from './showTasks.js';
import { setLocalStorage } from './setLocalStorage.js';
import getTasksFromLocalStorage from './getTasks.js';
// eslint-disable-next-line import/no-cycle
import setIndex from './index.js';
// Remove Completed Tasks
const removeCompletedTasks = () => {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((item) => item.completed === false);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

export default removeCompletedTasks;