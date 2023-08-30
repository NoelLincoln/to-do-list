import renderItems from './RenderTasks.js';

const addTask = () => {
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
  const descriptionInput = document.getElementById('description');
  const descriptionValue = descriptionInput.value.trim(); // Use a separate variable

  const completed = false;

  const updateItemIds = () => {
    savedItems.forEach((item, index) => {
      item.id = index;
    });
  };

  const updateLocalStorage = () => {
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  };

  const id = savedItems.length + 1;

  if (descriptionValue !== '') {
    savedItems.push({ description: descriptionValue, completed, id });

    updateLocalStorage();
    updateItemIds();
    renderItems();
    descriptionInput.value = '';
  } else {
    const error = document.querySelector('.error');
    error.innerHTML =
      '<p class="error-p" id="description-error"> Please fill in a task or item</p>';

    const descriptionError = document.getElementById('description-error');
    descriptionInput.addEventListener('click', () => {
      descriptionError.textContent = ''; // Clear the error message
    });
  }
};
export default addTask;
