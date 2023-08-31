import renderItems from './RenderTasks.js';
import addTask from './AddTask.js';

const ItemManager = () => {
  renderItems();

  const addItem = document.getElementById('enter-icon');

  const handleOnClickAddItem = () => {
    addTask();
  };

  addItem.addEventListener('click', handleOnClickAddItem);
  renderItems();
};

export default ItemManager;
