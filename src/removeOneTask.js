import { setLocalStorage } from './setLocalStorage.js';
import getTasksFromLocalStorage from './getTasks.js';

const deleteTodo = (key) => {
  let tasks = getTasksFromLocalStorage();
  tasks = tasks.filter((item) => item.index !== Number(key));
  setLocalStorage(tasks);
};

export default deleteTodo;