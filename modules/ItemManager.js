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

  removeTask(index) {
    this.savedItems.splice(index, 1);
    this.updateLocalStorage();
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
      Options.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
      Options.setAttribute('id', 'options-icon');

      const TrashIcon = document.createElement('div');
      TrashIcon.innerHTML = '<i class="fas fa-trash-alt"></i>';
      TrashIcon.setAttribute('id', 'trash-icon');
      TrashIcon.style.display = 'none';

      Items.appendChild(ToDoItems);
      Items.appendChild(Options);
      Items.appendChild(TrashIcon);

      this.ToDoItemsContainer.appendChild(divider);

      const CompletedStatus = document.createElement('input');
      CompletedStatus.classList.add('checkbox');
      CompletedStatus.type = 'checkbox';
      CompletedStatus.setAttribute('id', 'checkbox');
      CompletedStatus.checked = false;
      CompletedStatus.addEventListener('change', () => {
        const optionsicon = document.getElementById('options-icon');
        optionsicon.style.display = 'none';
        TrashIcon.style.display = 'flex';
      });

      //   const isChecked = document.querySelector('.checkbox').checked;
      //   const CompletedStatusValue = isChecked ? 1 : 0;
      //   CompletedStatus = CompletedStatusValue;

      const DescriptionInput = document.createElement('input');
      DescriptionInput.type = 'text';
      DescriptionInput.value = item.description;
      DescriptionInput.classList.add('to-do-item');

      ToDoItems.appendChild(CompletedStatus);
      ToDoItems.appendChild(DescriptionInput);

      this.ToDoItemsContainer.appendChild(Items);
    });
  }
}

export default ItemManager;
