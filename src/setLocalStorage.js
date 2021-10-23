import getTasksFromLocalStorage from './getTasks';

const setLocalStorage = (lists) => {
  localStorage.setItem('allTasks', JSON.stringify(lists));
};

const addToLocalStorage = (item) => {
  const tasks = getTasksFromLocalStorage();
  tasks.push(item);
  setLocalStorage(tasks);
};

export { setLocalStorage, addToLocalStorage };