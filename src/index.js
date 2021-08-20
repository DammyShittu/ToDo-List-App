import './style.css';
import completeTask from './complete.js';
import { setLocalStorage, addToLocalStorage } from './setLocalStorage.js';
import getTasksFromLocalStorage from './getTasks.js';

// Dynamically display tasks
const listContainer = document.getElementById('todo-lists');

const showTasks = () => {
  listContainer.innerHTML = '';
  const tasks = getTasksFromLocalStorage();
  for (let i = 0; i < tasks.length; i += 1) {
    const list = ` <li class="task" id="${tasks[i].index}" data-key="${tasks[i].index}" draggable="true">
    <div>
      <input type="checkbox" class="box" id="list-box" name="list-box">
      <label class="form-label">${tasks[i].description}</label>
    </div>
  
    <button id="${tasks[i].index}" class="delete"><i class='fas fa-trash-alt delete-task'></i></button>
  </li>`;

    listContainer.innerHTML += list;
  }

  // Add Line Through When Checkbox Is Checked
  const box = document.querySelectorAll('.box');
  for (let j = 0; j < box.length; j += 1) {
    box[j].checked = tasks[j].completed;
    box[j].addEventListener('change', (event) => {
      completeTask(event.target, tasks[j]);
      setLocalStorage(tasks);
    });
  }

  const label = document.querySelectorAll('.form-label');
  label.forEach((item) => {
    item.addEventListener('dblclick', () => {
      item.setAttribute('contenteditable', 'true');
    });

    // Show Delete Icon On Focus
    item.addEventListener('focus', () => {
      item.parentElement.parentElement.style.backgroundColor = '#dadadc';
    });

    // Hide Delete Icon On Blur
    item.addEventListener('blur', () => {
      item.parentElement.parentElement.style.backgroundColor = '#fff';
      setLocalStorage(tasks);
    });
  });
};

const input = document.querySelector('.text');

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

// Make Label Editable On Double Click

const form = document.getElementById('form');
form.addEventListener('submit', addTodoTask);

// Delete Tasks
const deleteTodo = (key) => {
  const tasks = getTasksFromLocalStorage();
  tasks.splice((key - 1), 1);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

// Event Listener To Delete One Task
listContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-task')) {
    const listKey = event.target.parentElement.parentElement.dataset.key;
    deleteTodo(listKey);
  }
});

// Remove Completed Tasks
const removeCompletedTasks = () => {
  let tasks = getTasksFromLocalStorage();
  // let i = 1;
  tasks = tasks.filter((item) => item.completed === false);
  setIndex(tasks);
  setLocalStorage(tasks);
  showTasks();
};

const removeCompleted = document.querySelector('.clear-completed');
removeCompleted.addEventListener('click', removeCompletedTasks);

showTasks();