const taskComplete = (event) => {
  const tasks = Array.from(JSON.parse(localStorage.getItem('savedItems')));
  tasks.forEach((task) => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle('completed');
};
export default taskComplete;
