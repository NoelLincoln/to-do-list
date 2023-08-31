import './style.css';
import EnterIconImg from './images/enter.png';
import ItemManager from '../modules/ItemManager.js';
import renderItems from '../modules/RenderTasks';

const entericon = document.getElementById('enter-icon');
const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

const EnterIcon = new Image();
EnterIcon.src = EnterIconImg;

entericon.appendChild(EnterIcon);

document.addEventListener('DOMContentLoaded', () => {
  ItemManager();
});
