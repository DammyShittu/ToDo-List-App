import getTasksFromLocalStorage from './getTasks.js';
import completeTask from './complete.js';
import { setLocalStorage } from './setLocalStorage.js';
// Dynamically display tasks
const listContainer = document.getElementById('todo-lists');
const showTasks = () => {
  listContainer.innerHTML = '';
  const tasks = getTasksFromLocalStorage();
  for (let i = 0; i < tasks.length; i += 1) {
    const holder = document.createElement('div');
    holder.innerHTML += ` <li class="task" id="${tasks[i].index}" data-key="${tasks[i].index}" draggable="true">
    <div>
      <input id="box-${i}" type="checkbox" class="box" id="list-box" name="list-box">
      <label id="label-${i}" class="form-label">${tasks[i].description}</label>
    </div>
  
    <button id="${tasks[i].index}" class="delete"><i class='fas fa-trash-alt delete-task'></i></button>
  </li>`;

    while (holder.firstChild) {
      listContainer.appendChild(holder.firstChild);
    }

    const label = document.getElementById(`label-${i}`);
    const box = document.getElementById(`box-${i}`);

    box.checked = tasks[i].completed;
    box.addEventListener('change', (event) => {
      completeTask(event.target, tasks[i]);
      setLocalStorage(tasks);
    });

    label.addEventListener('dblclick', () => {
      label.setAttribute('contenteditable', 'true');
    });

    // Show Delete Icon On Focus
    label.addEventListener('focus', () => {
      label.parentElement.parentElement.style.backgroundColor = '#dadadc';
    });

    // Hide Delete Icon On Blur
    label.addEventListener('blur', () => {
      label.parentElement.parentElement.style.backgroundColor = '#fff';
      tasks[i].description = label.innerHTML;
      setLocalStorage(tasks);
    });
  }
};

export default showTasks;