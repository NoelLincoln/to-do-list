import renderItems from './RenderTasks.js';
import addTask from './AddTask.js';
import removeTask from './RemoveTask.js';

const ItemManager = () => {
  renderItems();
  removeTask();

  const addItem = document.getElementById('enter-icon');

  const handleOnClickAddItem = () => {
    addTask();
  };

  addItem.addEventListener('click', handleOnClickAddItem);
  renderItems();
};

export default ItemManager;
