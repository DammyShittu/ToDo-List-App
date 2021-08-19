const getTasksFromLocalStorage = () => {
  let myTasks;
  if (localStorage.getItem('allTasks') === null) {
    myTasks = [];
  } else {
    myTasks = JSON.parse(localStorage.getItem('allTasks'));
  }
  return myTasks;
};

export default getTasksFromLocalStorage;