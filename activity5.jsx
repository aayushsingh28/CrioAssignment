import React from 'react';

class EventCaptureBubblingDemo extends React.Component {
  handleButtonClick = (event, phase) => {
    alert(`Button Clicked! (Event Phase: ${phase})`);
  };

  render() {
    return (
      <div>
        <h2>Event Capture and Bubbling Demo</h2>
        <button onClick={(e) => this.handleButtonClick(e, 'Capture')} onClickCapture={(e) => this.handleButtonClick(e, 'Capture')}>
          Click me!
        </button>
      </div>
    );
  }
}

export default EventCaptureBubblingDemo;
