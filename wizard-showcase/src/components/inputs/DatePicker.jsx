import React from 'react';

// Uses the HTML5 date input.
function DatePicker({ value, onChange }) {
  return (
    <input 
      type="date" 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2"
    />
  );
}

export default DatePicker;
  
