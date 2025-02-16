import React from 'react';

// Uses the HTML5 date input.
// Supports a 'limit' prop: "past", "future", or "free".
function DatePicker({ value, onChange, onBlur, limit }) {
  const today = new Date().toISOString().split('T')[0];
  let min = undefined, max = undefined;
  if (limit === 'past') {
    max = today;
  } else if (limit === 'future') {
    min = today;
  }
  return (
    <input 
      type="date" 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      min={min}
      max={max}
      className="border rounded p-2"
    />
  );
}

export default DatePicker;
