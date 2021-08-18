import './style.css';

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

const listContainer = document.getElementById('todo-lists');

// Dynamically display tasks

const showTasks = () => {
  for (let i = 0; i < todoList.length; i += 1) {
    const task = todoList[i];
    const list = ` <li class="task" id="${task.index}">
    <div>
      <input type="checkbox" class="box" id="list-box" name="list-box">
      <label contenteditable="true">${task.description}</label>
    </div>
    <button type="submit"><i class="fas fa-ellipsis-v fa-xs"></i></button>
  </li>`;

    listContainer.innerHTML += list;
  }
};

window.onload = showTasks;
