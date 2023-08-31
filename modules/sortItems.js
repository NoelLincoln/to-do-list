const sortItems = () => {
  const sortableList = document.querySelector('.to-do-items-container');
  const items = sortableList.querySelectorAll('.items');

  items.forEach((item) => {
    item.addEventListener('dragstart', () => {
      // Adding dragging class to item after a delay
      setTimeout(() => item.classList.add('dragging'), 0);
    });
    // Removing dragging class from item on dragend event
    item.addEventListener('dragend', () => item.classList.remove('dragging'));
  });

  const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');

    if (!draggingItem) return;

    // Getting all items except the currently dragging one
    const siblings = [
      ...sortableList.querySelectorAll('.items:not(.dragging)'),
    ];

    // Calculate the mouse position relative to the list
    const mouseY = e.clientY - sortableList.getBoundingClientRect().top;

    // Find the index to insert the dragging item
    const indexToInsert = siblings.findIndex((sibling) => {
      const siblingTop = sibling.offsetTop;
      const siblingHeight = sibling.offsetHeight;

      return mouseY < siblingTop + siblingHeight / 2;
    });

    // Insert the dragging item at the calculated index
    if (indexToInsert !== -1) {
      sortableList.insertBefore(draggingItem, siblings[indexToInsert]);
    } else {
      // If index is -1, the item should be placed at the end of the list
      sortableList.appendChild(draggingItem);
    }
  };

  sortableList.addEventListener('dragover', initSortableList);
  sortableList.addEventListener('dragenter', (e) => e.preventDefault());
};
export default sortItems;
