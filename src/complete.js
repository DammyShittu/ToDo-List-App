const completeTask = (box, list) => {
  if (box.checked) {
    box.nextElementSibling.classList.add('line');
    box.parentElement.style.opacity = '0.6';
    list.completed = true;
  } else {
    box.nextElementSibling.classList.remove('line');
    box.parentElement.style.opacity = '1';
    list.completed = false;
  }
};

export default completeTask;
