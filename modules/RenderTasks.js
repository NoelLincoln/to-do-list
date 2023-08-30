const renderItems = () => {
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

  const updateLocalStorage = () => {
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  };

  const ToDoItemsContainer = document.getElementById('to-do-items-container');
  ToDoItemsContainer.innerHTML = ''; // Clear previous items

  savedItems.forEach((item, index) => {
    // check if the item is completed
    console.log(item.completed);
    const checked = item.completed ? 'true' : false;
    const Items = document.createElement('div');
    Items.classList.add('items');
    Items.setAttribute('data-id', item.id); // Assign the id as a data attribute

    const divider = document.createElement('hr');

    const ToDoItems = document.createElement('div');
    ToDoItems.classList.add('to-do-items');
    const Options = document.createElement('div');
    Options.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    Options.classList.add('options-icon');

    const TrashIcon = document.createElement('div');
    TrashIcon.innerHTML = '<i class="fas fa-trash-alt"></i>';
    TrashIcon.classList.add('trash-icon');
    TrashIcon.style.display = 'none';

    Items.appendChild(ToDoItems);
    Items.appendChild(Options);
    Items.appendChild(TrashIcon);

    ToDoItemsContainer.appendChild(divider);

    const CompletedStatus = document.createElement('input');
    CompletedStatus.classList.add('checkbox');
    CompletedStatus.type = 'checkbox';
    CompletedStatus.setAttribute('id', index);
    CompletedStatus.setAttribute('checked', checked);
    CompletedStatus.checked = item.completed;
    CompletedStatus.addEventListener('change', () => {
      item.completed = CompletedStatus.checked;
      updateLocalStorage();

      const optionsicon = Items.querySelector('.options-icon');
      const trashIcon = Items.querySelector('.trash-icon');

      if (CompletedStatus.checked) {
        optionsicon.style.display = 'none';
        trashIcon.style.display = 'flex';
        CompletedStatus.checked = true;
        updateLocalStorage();

        // completed = true;
        ToDoItems.classList.toggle('checked');
      } else {
        optionsicon.style.display = 'flex';
        trashIcon.style.display = 'none';
        ToDoItems.classList.toggle('checked');
      }

      trashIcon.addEventListener('click', () => {
        const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

        if (index >= 0 && index < savedItems.length) {
          savedItems.splice(index, 1); // Remove the item at the given index

          // Update the IDs of the remaining items
          savedItems.forEach((item, newIndex) => {
            item.id = newIndex;
          });

          // Update local storage with the modified savedItems array
          localStorage.setItem('savedItems', JSON.stringify(savedItems));
        }

        renderItems();
      });
    });

    const DescriptionInput = document.createElement('input');
    DescriptionInput.type = 'text';
    DescriptionInput.value = item.description;
    DescriptionInput.classList.add('to-do-item');

    ToDoItems.appendChild(CompletedStatus);
    ToDoItems.appendChild(DescriptionInput);

    ToDoItemsContainer.appendChild(Items);
  });
};

export default renderItems;
