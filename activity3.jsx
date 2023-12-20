import React from 'react';

class ItemList extends React.Component {
  handleDeleteClick = (event) => {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('delete-button')) {
      // Extract item id from data attribute
      const itemId = event.target.getAttribute('data-item-id');

      // Perform the delete operation (simulated in this example)
      alert(`Deleting item with id ${itemId}`);
    }
  };

  render() {
    return (
      <div onClick={this.handleDeleteClick}>
        <ul>
          <li>
            Item 1 <button className="delete-button" data-item-id="1">Delete</button>
          </li>
          <li>
            Item 2 <button className="delete-button" data-item-id="2">Delete</button>
          </li>
          <li>
            Item 3 <button className="delete-button" data-item-id="3">Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default ItemList;
