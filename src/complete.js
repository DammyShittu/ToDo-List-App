const completeTask = (box, task) => {
  if (box.checked) {
    box.nextElementSibling.classList.add('line');
    box.parentElement.style.opacity = '0.6';
    task.completed = true;
  } else {
    box.nextElementSibling.classList.remove('line');
    box.parentElement.style.opacity = '1';
    task.completed = false;
  }
};

export default completeTask;
