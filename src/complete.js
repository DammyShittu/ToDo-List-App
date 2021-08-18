const completeTask = (box, task) => {
  if (box.checked) {
    box.nextElementSibling.classList.add('line');
    task.completed = true;
  } else {
    box.nextElementSibling.remove('line');
    task.completed = false;
  }
};

export default completeTask;
