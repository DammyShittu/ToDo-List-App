import './style.css';
import showTasks from './showTasks.js';
import { addToLocalStorage } from './setLocalStorage.js';
import deleteTodo from './removeOneTask.js';

// Global Variables
const listContainer = document.getElementById('todo-lists');
const input = document.querySelector('.text');

function clearInput() {
  input.value = '';
}

// Add Task

const addTodoTask = (e) => {
  e.preventDefault();

  if (input.value === '') {
    return;
  }

  const todo = {
    description: input.value,
    completed: false,
    index: Date.now(),
  };

  clearInput();
  addToLocalStorage(todo);
  showTasks();
};

const form = document.getElementById('form');
form.addEventListener('submit', addTodoTask);

listContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-task')) {
    const listKey = event.target.parentElement.parentElement.dataset.key;
    deleteTodo(listKey);
    showTasks();
  }
});

showTasks();
