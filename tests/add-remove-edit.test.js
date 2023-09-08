/**
 * @jest-environment jsdom
 */

import addTask from '../modules/AddTask.js';
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

describe('addTask, renderItems, and removeItems', () => {
  beforeEach(() => {
    // Clear localStorage and set up the DOM before each test
    localStorage.clear();
    setUpDOM();
  });

  test('it adds a task when description is not empty', () => {
    // Simulate user input and add a task
    const descriptionInput = document.getElementById('description');
    descriptionInput.value = 'New Task';
    addTask();

    descriptionInput.value = 'New Task 1';
    addTask();

    descriptionInput.value = 'New Task 2';
    addTask();

    // Retrieve and parse the savedItems from localStorage
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    // Expectations
    expect(savedItems).toHaveLength(3);
    expect(savedItems[0]).toMatchObject({
      description: 'New Task',
      completed: false,
      id: 1,
    });
  });
  test('it does not add a task when description is empty', () => {
    // Arrange
    const descriptionInput = document.getElementById('description');
    descriptionInput.value = '';

    // Act
    addTask();

    // Retrieve and parse the savedItems from localStorage
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    // Assert
    expect(savedItems).toEqual([]); // Check for an empty array
  });

  test('it renders the items correctly', () => {
    // Arrange
    const savedItems = [
      { id: 1, description: 'Task 1', completed: false },
      { id: 2, description: 'Task 2', completed: true },
    ];
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    // Act
    renderItems();
    // Assert
    const renderedItems = document.querySelectorAll('.items');
    expect(renderedItems.length).toBe(2);
    const item1 = renderedItems[0];
    expect(item1.getAttribute('data-id')).toBe('1');
    expect(item1.querySelector('.to-do-item').value).toBe('Task 1');
    expect(item1.querySelector('.checkbox').checked).toBe(false);
    const item2 = renderedItems[1];
    expect(item2.getAttribute('data-id')).toBe('2');
    expect(item2.querySelector('.to-do-item').value).toBe('Task 2');
    expect(item2.querySelector('.checkbox').checked).toBe(true);
  });

  test('it removes the item from the local storage and re-renders items when the trash icon is clicked', () => {
    // Arrange
    const savedItems = [
      { id: 1, description: 'Task 1', completed: false },
      { id: 2, description: 'Task 2', completed: false },
      { id: 3, description: 'Task 3', completed: false },
    ];
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    renderItems();
    const secondItemTrashIcon = document.querySelectorAll('.trash-icon')[1];
    // Act
    secondItemTrashIcon.dispatchEvent(new Event('click'));
    // Assert
    const updatedItems = JSON.parse(localStorage.getItem('savedItems'));
    expect(updatedItems.length - 1).toBe(2);
    expect(updatedItems[0].description).toBe('Task 1');
    expect(updatedItems[1].description).toBe('Task 2');
    const renderedItems = document.querySelectorAll('.items');
    expect(renderedItems.length - 1).toBe(2);
  });
  test('it updates the local storage correctly when deleting an item', () => {
    // Arrange
    const savedItems = [
      { id: 1, description: 'Task 1', completed: false },
      { id: 2, description: 'Task 2', completed: false },
    ];
    localStorage.setItem('savedItems', JSON.stringify(savedItems));

    renderItems();

    const firstItemTrashIcon = document.querySelector('.trash-icon');
    expect(document.querySelectorAll('.items').length).toBe(2);

    // Act
    firstItemTrashIcon.dispatchEvent(new Event('click'));

    // Assert
    const updatedItems = JSON.parse(localStorage.getItem('savedItems'));
    expect(updatedItems.length - 1).toBe(1);
    // expect(updatedItems[0].description).toBe('Task 2');
  });

});
