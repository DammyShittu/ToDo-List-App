import './style.css';
import completeTask from './complete.js';
import SetLocalStorage from './setLocalStorage.js';
import getTasksFromLocalStorage from './getTasks.js';

// Dynamically display tasks
const listContainer = document.getElementById('todo-lists');

const showTasks = () => {
  listContainer.innerHTML = '';
  const tasks = getTasksFromLocalStorage();
  for (let i = 0; i < tasks.length; i += 1) {
    const task = tasks[i];
    const list = ` <li class="task" id="${task.index}" draggable="true">
    <div>
      <input type="checkbox" class="box" id="list-box" name="list-box">
      <label class="form-label">${task.description}</label>
    </div>
    <button class="ellipsis"><i class="fas fa-ellipsis-v fa-xs"></i></button>
    <button class="delete"><i class='fas fa-trash-alt'></i></button>
  </li>`;

    listContainer.innerHTML += list;
  }

  // Add Line Through When Checkbox Is Checked
  const box = document.querySelectorAll('.box');
  for (let j = 0; j < box.length; j += 1) {
    box[j].checked = tasks[j].completed;
    box[j].addEventListener('change', (event) => {
      completeTask(event.target, tasks[j]);
      SetLocalStorage(tasks);
    });
  }
};

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
  SetLocalStorage(todo);
  showTasks();
};

const form = document.getElementById('form');
form.addEventListener('submit', addTodoTask);

// Make Label Editable On Double Click
const label = document.querySelectorAll('label');
label.forEach((item) => {
  item.addEventListener('dblclick', () => {
    item.setAttribute('contenteditable', 'true');
  });

  // Show Delete Icon On Focus
  item.addEventListener('focus', () => {
    const last = item.parentElement.parentElement.lastElementChild;
    last.style.display = 'block';
    item.parentElement.parentElement.style.backgroundColor = '#dadadc';

    const ellipsis = item.parentElement.parentElement.lastElementChild.previousElementSibling;
    ellipsis.style.display = 'none';
  });

  // Hide Delete Icon On Blur
  item.addEventListener('blur', () => {
    const last = item.parentElement.parentElement.lastElementChild;
    last.style.display = 'none';
    item.parentElement.parentElement.style.backgroundColor = '#fff';
    const ellipsis = item.parentElement.parentElement.lastElementChild.previousElementSibling;
    ellipsis.style.display = 'block';
  });
});

// Get Tasks From Local Storage
  showTasks();