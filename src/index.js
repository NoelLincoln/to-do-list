import './style.css';
import EnterIconImg from './images/enter.png';
import ItemManager from '../modules/ItemManager';
// import Elipsis from

const todoitemscontainer = document.getElementById('to-do-items-container');
const entericon = document.getElementById('enter-icon');
const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

const EnterIcon = new Image();
EnterIcon.src = EnterIconImg;

entericon.appendChild(EnterIcon);

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
  const initializeApp = new ItemManager();
  initializeApp.renderItems('school work');
});
