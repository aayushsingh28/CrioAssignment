import React from 'react';

class EventDelegationDemo extends React.Component {
  handleListClick = (event) => {
    if (event.target.tagName === 'LI') {
      // Handle the click on the list item
      alert(`Item clicked: ${event.target.textContent}`);
    }
  };

  render() {
    return (
      <ul onClick={this.handleListClick}>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    );
  }
}

export default EventDelegationDemo;
