const removeTask = (index) => {
  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

  if (index >= 0 && index < savedItems.length) {
    savedItems.splice(index, 1); // Remove the item at the given index

    // Update the IDs of the remaining items
    savedItems.forEach((item, newIndex) => {
      item.id = newIndex + 1;
    });

    // Update local storage with the modified savedItems array
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  }
};

export default removeTask;
