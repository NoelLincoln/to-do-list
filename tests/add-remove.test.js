/**
 * @jest-environment jsdom
 */

import addTask from '../modules/AddTask.js';

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
});
