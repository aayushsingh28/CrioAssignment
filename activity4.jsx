import React from 'react';

class EventBubblingPrevention extends React.Component {
  handleButtonClick = (event) => {
    alert('Button Clicked!');
    // Prevent event from bubbling up to the parent container
    event.stopPropagation();
  };

  handleContainerClick = () => {
    alert('Container Clicked!');
  };

  render() {
    return (
      <div onClick={this.handleContainerClick} style={{ border: '1px solid #ccc', padding: '10px' }}>
        <h2>Parent Container</h2>
        <button onClick={this.handleButtonClick}>Click me!</button>
      </div>
    );
  }
}

export default EventBubblingPrevention;
