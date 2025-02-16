import React from 'react';

// A simple one-line text input.
function TextInput({ value, onChange }) {
  return (
    <input 
      type="text" 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2 w-full"
    />
  );
}

export default TextInput;
  
