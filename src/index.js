import './style.css';
import EnterIconImg from './images/enter.png';
import ItemManager from '../modules/ItemManager.js';
import sortItems from '../modules/sortItems.js';

const entericon = document.getElementById('enter-icon');

const EnterIcon = new Image();
EnterIcon.src = EnterIconImg;

entericon.appendChild(EnterIcon);

document.addEventListener('DOMContentLoaded', () => {
  ItemManager();
  sortItems();
});
