import React from 'react';

// Renders a set of radio buttons.
function RadioInput({ options, value, onChange }) {
  return (
    <div>
      {options.map((option, index) => (
        <label key={index} className="mr-4">
          <input 
            type="radio" 
            name="radioGroup" 
            value={option} 
            checked={value === option}
            onChange={() => onChange(option)}
            className="mr-1"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default RadioInput;
  
