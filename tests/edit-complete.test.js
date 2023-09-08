/**
 * @jest-environment jsdom
 */

import renderItems from '../modules/RenderTasks.js';

// Create a function to set up the DOM environment
const setUpDOM = () => {
  document.body.innerHTML = `
    <input type="text" id="description" value="Test Task">
    <div class="error"></div>
    <div id="to-do-items-container" class="to-do-items-container"></div>
    <div id="clear-btn"></div>
    <div class="fas fa-trash-alt data-id="1" trash-icon"></div>
    <div class="fas fa-trash-alt data-id="2" trash-icon"></div>

  `;
};

describe('renderItems, and removeItems', () => {
  beforeEach(() => {
    // Clear localStorage and set up the DOM before each test
    localStorage.clear();
    setUpDOM();
  });

  test('it updates the local storage correctly when editing an item description', () => {
    // Arrange
    const savedItems = [
      { id: 1, description: 'Task 1', completed: false },
      { id: 2, description: 'Task 2', completed: false },
    ];
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    renderItems();
    const firstItemDescriptionInput = document.querySelector('.to-do-item');
    // Act
    firstItemDescriptionInput.value = 'Updated Task 1';
    firstItemDescriptionInput.dispatchEvent(new Event('blur'));
    // Assert
    const updatedItems = JSON.parse(localStorage.getItem('savedItems'));
    expect(updatedItems[0].description).toBe('Updated Task 1');
  });

  test('it clears all completed items from local storage when "Clear All" button is clicked', () => {
    // Arrange
    const savedItems = [
      { id: 1, description: 'Task 1', completed: true },
      { id: 2, description: 'Task 2', completed: false },
      { id: 3, description: 'Task 3', completed: true },
    ];
    localStorage.setItem('savedItems', JSON.stringify(savedItems));

    renderItems();

    const clearAllBtn = document.getElementById('clear-btn');
    expect(document.querySelectorAll('.items').length).toBe(3);

    // Act
    clearAllBtn.dispatchEvent(new Event('click'));

    // Assert
    const updatedItems = JSON.parse(localStorage.getItem('savedItems'));
    expect(updatedItems.length).toBe(1);
    expect(updatedItems[0].description).toBe('Task 2');
  });
  test('it updates the item status and local storage correctly when completing an item', () => {
    // Arrange
    const savedItems = [
      { id: 1, description: 'Task 1', completed: true },
      { id: 2, description: 'Task 2', completed: true },
    ];
    localStorage.setItem('savedItems', JSON.stringify(savedItems));

    renderItems();

    const firstItemCheckbox = document.querySelector('.checkbox');
    const firstItemOptionsIcon = document.querySelector('.options-icon');
    const firstItemTrashIcon = document.querySelector('.trash-icon');

    // Act
    firstItemCheckbox.dispatchEvent(new Event('change'));

    // Assert
    const updatedItems = JSON.parse(localStorage.getItem('savedItems'));
    expect(updatedItems[0].completed).toBe(true);
    expect(firstItemOptionsIcon.style.display).toBe('none');
    expect(firstItemTrashIcon.style.display).toBe('flex');
    expect(firstItemCheckbox.checked).toBe(true);
  });
  edit - complete - tests;
});
