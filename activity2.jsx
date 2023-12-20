import React, { useState, useRef, useEffect } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Attach event listener when the component mounts
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      {isOpen && (
        <div className="dropdown-content">
          <p>Dropdown content goes here</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
