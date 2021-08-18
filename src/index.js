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
    description: 'Do laundry',
    completed: false,
    index: 3,
  },
  {
    description: 'Do laundry',
    completed: false,
    index: 3,
  },
  {
    description: 'Do laundry',
    completed: false,
    index: 3,
  },
];

const listContainer = document.getElementById('todo-lists');

// Dynamically display tasks

const showTasks = () => {
  for (let i = 0; i < todoList.length; i += 1) {
    const task = todoList[i];
    const list = ` <li class="task" id="${task.index}" draggable="true">
    <div>
      <input type="checkbox" class="box" id="list-box" name="list-box">
      <label class="form-label">${task.description}</label>
    </div>
    <button class="ellipsis"><i class="fas fa-ellipsis-v fa-xs"></i></button>
    <button class="delete"><i class='fas fa-trash-alt'></i></button>
  </li>`;

    listContainer.innerHTML += list;

    if (task.completed === true) {
      const checkbox = document.querySelector('.box');
      checkbox.checked = true;
    }

    // Add Line Through When Checkbox Is Checked
    const box = document.querySelectorAll('.box');
    box.forEach((cb) => {
      cb.addEventListener('change', (event) => {
        completeTask(event.target, task);
      });
    });
  }

  // Make Label Editable On ouble Click
  const label = document.querySelectorAll('label');
  label.forEach((item) => {
    item.addEventListener('dblclick', () => {
      item.setAttribute('contenteditable', 'true');
    });
  });
};

window.onload = showTasks;
