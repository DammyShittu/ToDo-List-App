import showTasks from './showTasks';
import { setLocalStorage } from './setLocalStorage';
import getTasksFromLocalStorage from './getTasks';
// eslint-disable-next-line import/no-cycle
import setIndex from './index';

const removeCompletedTasks = () => {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((item) => item.completed === false);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

export default removeCompletedTasks;