class ItemManager {
  constructor() {
    this.savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    this.description = document.getElementById('description');
    this.completed = false;
    this.index = 0;

    this.addItem = document.getElementById('enter-icon');

    this.description.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById('enter-icon').click();
      }
    });

    this.addItem.addEventListener(
      'click',
      this.handleOnClickAddItem.bind(this)
    );
    this.renderItems();
  }

  updateLocalStorage() {
    localStorage.setItem('savedItems', JSON.stringify(this.savedItems));
  }

  addTask() {
    const description = this.description.value.trim();
    const completed = false;
    const id = this.savedItems.length;

    if (description !== null) {
      this.savedItems.push({ description, completed, id });
      this.updateLocalStorage();
    }

    this.renderItems();
  }

  handleOnClickAddItem(event) {
    event.preventDefault();
    this.addTask();
    // this.renderBooks();
    // this.bookTitle.value = '';
    // this.bookAuthor.value = '';
  }

  renderItems() {
    this.ToDoItemsContainer = document.getElementById('to-do-items-container');
    this.ToDoItemsContainer.innerHTML = ''; // Clear previous items

    this.savedItems.forEach((item, index) => {
      const Items = document.createElement('div');
      Items.classList.add('items');
      const divider = document.createElement('hr');

      const ToDoItems = document.createElement('div');
      ToDoItems.classList.add('to-do-items');
      const Options = document.createElement('div');
      Options.value = '&#10247;';
      Options.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

      Items.appendChild(ToDoItems);
      Items.appendChild(Options);
      this.ToDoItemsContainer.appendChild(divider);

      const CompletedStatus = document.createElement('input');
      CompletedStatus.type = 'checkbox';
      const DesriptionInput = document.createElement('input');
      DesriptionInput.type = 'text';
      DesriptionInput.value = item.description;
      DesriptionInput.classList.add('to-do-item');

      ToDoItems.appendChild(CompletedStatus);
      ToDoItems.appendChild(DesriptionInput);

      this.ToDoItemsContainer.appendChild(Items);
    });
  }
}

export default ItemManager;
