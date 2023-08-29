import renderItems from './RenderTasks.js';

const removeCheckedItems = () => {
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
  const updatedItems = savedItems.filter((item) => !item.completed);

  localStorage.setItem('savedItems', JSON.stringify(updatedItems));
  renderItems();
};

const addTask = () => {
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
  const descriptionval = document.getElementById('description');
  const description = descriptionval.value.trim();

  console.log(description);

  const completed = false;

  const updateItemIds = () => {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    savedItems.forEach((item, index) => {
      item.id = index;
    });
  };

  const updateLocalStorage = () => {
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  };

  //   descriptionval.addEventListener('keypress', (event) => {
  //     if (event.keycode === 13) {
  //       event.preventDefault();
  //       document.getElementById('enter-icon').click = () => {
  //         addTask();
  //       };
  //     }
  //   });

  const id = savedItems.length + 1;
  if (descriptionval !== null) {
    savedItems.push({ description, completed, id });
    descriptionval.value = '';
    updateItemIds();
    updateLocalStorage();
    renderItems();
  }
};
export default addTask;
