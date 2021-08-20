import getTasksFromLocalStorage from './getTasks.js';
import completeTask from './complete.js';
import { setLocalStorage } from './setLocalStorage.js';
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

export default showTasks;