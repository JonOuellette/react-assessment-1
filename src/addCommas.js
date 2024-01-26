import React, { useState } from 'react';

// Utility function to add commas to the number
function addCommas(num) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 20 }).format(num);
}

// React component for formatting numbers
const NumberFormatter = () => {
  const [number, setNumber] = useState('');
  const [formattedNumber, setFormattedNumber] = useState('');

  // Handle changes to the input field
  const handleChange = (e) => {
    setNumber(e.target.value); // Update the input number state
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formatted = addCommas(number.replace(/,/g, '')); // Format the input number
    setFormattedNumber(formatted); // Update the formatted number state
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Enter a Number:</label>
        <input
          id="number"
          name="number"
          type="text"
          placeholder="Enter a number"
          value={number} 
          onChange={handleChange}
        />
        <button type="submit">Format Number</button>
      </form>
      {formattedNumber && <h3>Formatted Number: {formattedNumber}</h3>}
    </div>
  );
};

export default NumberFormatter;
