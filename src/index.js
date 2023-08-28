import './style.css';
import EnterIconImg from './images/enter.png';

const todoitems = [
  {
    description: 'work out',
    completed: false,
    index: 1,
  },
  {
    description: 'Go shopping',
    completed: false,
    index: 0,
  },
];

const todoitemscontainer = document.getElementById('to-do-items-container');
const entericon = document.getElementById('enter-icon');

const EnterIcon = new Image();
EnterIcon.src = EnterIconImg;

entericon.appendChild(EnterIcon);

const loadToDoItems = (todoitemsdata = []) => {
  const sortedTodoItems = todoitemsdata.sort((a, b) => a.index - b.index);

  let todoitemscontent = '';
  sortedTodoItems.forEach((todoitem, index) => {
    todoitemscontent += `
        <div class="items">
            <div class="to-do-items">
                 <input type="checkbox" id="todo-${index}" class="to-do-item" name="to-do-item">
                 <label for="todo-${index}">${todoitem.description}</label><br>
            </div>
            <div class="options">&#10247;</div>
        </div>
        <hr>`;
  });
  return todoitemscontent;
};

document.addEventListener('DOMContentLoaded', () => {
  todoitemscontainer.innerHTML = loadToDoItems(todoitems);
});
