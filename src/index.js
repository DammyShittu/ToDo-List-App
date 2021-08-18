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
];

// Set Tasks In Local Storage
const SetLocalStorage = (lists) => {
  localStorage.setItem('myTasks', JSON.stringify(lists));
};

// Dynamically display tasks
const listContainer = document.getElementById('todo-lists');
const showTasks = (tasks) => {
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

    // if (task.completed) {
    //   const box = document.querySelector('.box');
    //   box.checked = true;
    // }
    // Add Line Through When Checkbox Is Checked
    const box = document.querySelectorAll('.box');
    box.forEach((cb) => {
      cb.addEventListener('change', (event) => {
        completeTask(event.target, tasks[i]);
        console.log(tasks[i]);
        SetLocalStorage(tasks);
      });
    });

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
  SetLocalStorage(tasks);
};

window.onload = () => {
  const getTodo = JSON.parse(localStorage.getItem('myTasks'));

  if (getTodo === null) {
    showTasks(todoList);
  } else {
    showTasks(todoList);
  }
};
