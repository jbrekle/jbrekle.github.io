import React from 'react';

// Renders a set of checkboxes.
function CheckboxInput({ options, value, onChange }) {
  // value is expected to be an array.
  const handleToggle = (option) => {
    if (value.includes(option)) {
      onChange(value.filter(item => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div>
      {options.map((option, index) => (
        <label key={index} className="mr-4">
          <input 
            type="checkbox" 
            value={option}
            checked={value.includes(option)}
            onChange={() => handleToggle(option)}
            className="mr-1"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default CheckboxInput;
  
