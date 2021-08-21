/* eslint-disable import/no-cycle */
import './style.css';
import showTasks from './showTasks.js';
import { addToLocalStorage } from './setLocalStorage.js';
import getTasksFromLocalStorage from './getTasks.js';
import deleteTodo from './deleteOne.js';
import removeCompletedTasks from './clearCompleted.js';

const input = document.querySelector('.text');
const form = document.getElementById('form');
const removeCompleted = document.querySelector('.clear-completed');

function clearInput() {
  input.value = '';
}

// Add Task

const addTodoTask = (e) => {
  const tasks = getTasksFromLocalStorage();
  e.preventDefault();

  if (input.value === '') {
    return;
  }

  const todo = {
    description: input.value,
    completed: false,
    index: tasks.length + 1,
  };

  clearInput();
  addToLocalStorage(todo);
  showTasks();
};

const setIndex = (tasks) => {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
};

// Event Listener To Add Form
form.addEventListener('submit', addTodoTask);

// Event Listener To Delete One Task
const listContainer = document.getElementById('todo-lists');
listContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-task')) {
    const listKey = event.target.parentElement.parentElement.dataset.key;
    deleteTodo(listKey);
  }
});

// Event Listener To Clear Completed
removeCompleted.addEventListener('click', removeCompletedTasks);

showTasks();

export default setIndex;