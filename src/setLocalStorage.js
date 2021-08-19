import getTasksFromLocalStorage from './getTasks.js';
// Set Tasks In Local Storage
const SetLocalStorage = (lists) => {
  // eslint-disable-next-line no-use-before-define
  const task = getTasksFromLocalStorage();
  task.push(lists);
  localStorage.setItem('allTasks', JSON.stringify(task));
};

export default SetLocalStorage;