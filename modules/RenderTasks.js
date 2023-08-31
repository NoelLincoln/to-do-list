const renderItems = () => {
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

  const updateLocalStorage = () => {
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  };

  const ToDoItemsContainer = document.getElementById('to-do-items-container');
  ToDoItemsContainer.innerHTML = '';

  savedItems.forEach((item, index) => {
    const checked = item.completed ? 'true' : false;
    const Items = document.createElement('div');
    Items.classList.add('items');
    Items.setAttribute('data-id', item.id);

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

    const EditIcon = document.createElement('div');
    EditIcon.innerHTML = '<i class="fas fa-edit"></i>';
    EditIcon.classList.add('edit-icon');
    EditIcon.style.display = 'none';

    Items.appendChild(ToDoItems);
    Items.appendChild(Options);
    Items.appendChild(TrashIcon);
    Items.appendChild(EditIcon);

    ToDoItemsContainer.appendChild(divider);

    const CompletedStatus = document.createElement('input');
    CompletedStatus.classList.add('checkbox');
    CompletedStatus.type = 'checkbox';
    CompletedStatus.setAttribute('id', index + 1);
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
        ToDoItems.classList.toggle('checked');
      } else {
        optionsicon.style.display = 'flex';
        trashIcon.style.display = 'none';
        ToDoItems.classList.toggle('checked');
        CompletedStatus.checked = false;
        updateLocalStorage();
      }

      trashIcon.addEventListener('click', () => {
        const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

        if (index >= 0 && index < savedItems.length + 1) {
          savedItems.splice(index, 1);

          for (let i = 0; i < savedItems.length; i += 1) {
            savedItems[i].id = i + 1;
          }

          localStorage.setItem('savedItems', JSON.stringify(savedItems));
        }

        renderItems();
      });
    });

    const editerror = document.createElement('span');
    editerror.classList.add('error-edit');
    const DescriptionInput = document.createElement('input');
    DescriptionInput.type = 'text';
    DescriptionInput.value = item.description;
    DescriptionInput.classList.add('to-do-item');
    DescriptionInput.setAttribute('id', item.id);
    DescriptionInput.appendChild(editerror);

    DescriptionInput.addEventListener('click', () => {
      const optionsicon = Items.querySelector('.options-icon');
      const editIcon = Items.querySelector('.edit-icon');
      optionsicon.style.display = 'none';
      editIcon.style.display = 'flex';
    });
    const trashIcon = Items.querySelector('.trash-icon');

    trashIcon.addEventListener('click', () => {
      const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

      if (index > 0 && index < savedItems.length) {
        savedItems.forEach((item, newIndex) => {
          item.id = newIndex;
        });

        // Update local storage with the modified savedItems array
        localStorage.setItem('savedItems', JSON.stringify(savedItems));
      }

      renderItems();
    });

    DescriptionInput.addEventListener('blur', () => {
      const optionsicon = Items.querySelector('.options-icon');
      const trashIcon = Items.querySelector('.trash-icon');
      optionsicon.style.display = 'flex';
      trashIcon.style.display = 'none';

      const newValue = DescriptionInput.value.trim();
      if (newValue !== '') {
        item.description = newValue;
        updateLocalStorage();
        renderItems();
      } else {
        const error = document.querySelector('.error');
        error.innerHTML =
          '<p class="error-p" id="description-error"> Please fill in a task or item</p>';
      }
      const descriptionError = document.getElementById('description-error');
      DescriptionInput.addEventListener('click', () => {
        descriptionError.textContent = '';
      });
    });

    DescriptionInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        DescriptionInput.blur();
      }
    });

    ToDoItems.appendChild(CompletedStatus);
    ToDoItems.appendChild(DescriptionInput);

    ToDoItemsContainer.appendChild(Items);

    const clearAllCompleted = () => {
      const clearallbtn = document.getElementById('clear-btn');
      clearallbtn.addEventListener('click', () => {
        const updatedSavedItems = savedItems.filter((item) => !item.completed);
        localStorage.setItem('savedItems', JSON.stringify(updatedSavedItems));

        const updateItemIds = () => {
          savedItems.forEach((item, index) => {
            item.id = index;
          });
        };
        updateItemIds();

        renderItems();
      });
    };
    clearAllCompleted();
  });
};

export default renderItems;
