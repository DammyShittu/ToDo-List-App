import './style.css';
import completeTask from './complete.js';

const todoList = [
  {
    description: 'Start a web project',
    completed: false,
    index: 1,
  },
  {
    description: 'Walk the dog',
    completed: false,
    index: 2,
  },
  {
    description: 'Travel To Mars',
    completed: false,
    index: 2,
  },
  {
    description: 'Sleep',
    completed: false,
    index: 2,
  },
];

// Set Tasks In Local Storage
const SetLocalStorage = (lists) => {
  localStorage.setItem('myTasks', JSON.stringify(lists));
};

const getTasksFromLocalStorage = () => JSON.parse(localStorage.getItem('myTasks'));

// Dynamically display tasks
const listContainer = document.getElementById('todo-lists');
const showTasks = () => {
  const tasks = getTasksFromLocalStorage();
  for (let i = 0; i < tasks.length; i += 1) {
    const list = ` <li class="task" id="${tasks[i].index}" draggable="true">
    <div>
      <input type="checkbox" class="box" id="list-box" name="list-box">
      <label class="form-label">${tasks[i].description}</label>
    </div>
    <button class="ellipsis"><i class="fas fa-ellipsis-v fa-xs"></i></button>
    <button class="delete"><i class='fas fa-trash-alt'></i></button>
  </li>`;

    listContainer.innerHTML += list;

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

// Get Tasks From Local Storage
window.onload = () => {
  const getTodo = getTasksFromLocalStorage();

  if (getTodo === null) {
    SetLocalStorage(todoList);
  }
  showTasks();
};
