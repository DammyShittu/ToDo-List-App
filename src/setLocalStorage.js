import getTasksFromLocalStorage from './getTasks.js';
// Set Tasks In Local Storage
const setLocalStorage = (lists) => {
  // eslint-disable-next-line no-use-before-define
  localStorage.setItem('allTasks', JSON.stringify(lists));
};

const addToLocalStorage = (item) => {
  // eslint-disable-next-line no-use-before-define
  const tasks = getTasksFromLocalStorage();
  tasks.push(item);
  setLocalStorage(tasks);
};

export { setLocalStorage, addToLocalStorage };