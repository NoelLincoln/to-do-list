import './style.css';
import EnterIconImg from './images/enter.png';
import ItemManager from '../modules/ItemManager.js';
// import Elipsis from

const entericon = document.getElementById('enter-icon');

const EnterIcon = new Image();
EnterIcon.src = EnterIconImg;

entericon.appendChild(EnterIcon);

// const taskForm = document.getElementById('task-form');
// const descriptionInput = document.getElementById('description');

// taskForm.addEventListener('submit', (event) => {
//   if (descriptionInput.value.trim() === '') {
//     console.log('empty field'); // Optionally show an error message or provide user feedback
//   }
// });
// const loadToDoItems = (savedItems) => {
//   const sortedTodoItems = savedItems.sort((a, b) => a.index - b.index);

//   let todoitemscontent = '';
//   sortedTodoItems.forEach((todoitem, index) => {
//     todoitemscontent += `
//         <div class="items">
//             <div class="to-do-items">
//                  <input type="checkbox" id="todo-${index}" class="to-do-item" name="to-do-item">
//                  <label for="todo-${index}">${todoitem.description}</label><br>
//             </div>
//             <div class="options">&#10247;</div>
//         </div>
//         <hr>`;
//   });
//   return todoitemscontent;
// };

document.addEventListener('DOMContentLoaded', () => {
  ItemManager();
});
