import showTasks from './showTasks';
import { setLocalStorage } from './setLocalStorage';
import getTasksFromLocalStorage from './getTasks';
// eslint-disable-next-line import/no-cycle
import setIndex from './index';

const deleteTodo = (key) => {
  const tasks = getTasksFromLocalStorage();
  tasks.splice((key - 1), 1);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

export default deleteTodo;