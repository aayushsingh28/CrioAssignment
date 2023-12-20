import React from 'react';

class EventBubblingDemo extends React.Component {
  //method for the event handler that alerts the tag name of the element that was clicked.
  handleClick = (event) => {
    alert(`Clicked on ${event.target.tagName}`);
  };

  render() {
    return (
      //parent container has an onClick attribute that is set to the handleClick method.
      <div onClick={this.handleClick} style={{ border: '1px solid #ccc', padding: '10px' }}>
        <h2>Parent Container</h2>
//There are two buttons, one in the parent container and another in the child container.
        <button>Click me!</button>
        <div>
          <h3>Child Container</h3>
          <button>Click me too!</button>
        </div>
      </div>
    );
  }
}
//The handleClick method will be called, and it will display an alert with the tag name of the clicked element.


export default EventBubblingDemo;
