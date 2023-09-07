/**
 * @jest-environment jsdom
 */

import addTask from '../modules/AddTask.js';
import renderItems from '../modules/RenderTasks.js';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
// global.localStorage = localStorageMock;

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
});
