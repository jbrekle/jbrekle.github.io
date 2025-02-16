import React from 'react';

// A simple one-line text input.
// Supports mobile keyboard configuration via the "keyboard" prop.
function TextInput({ value, onChange, keyboard }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2 w-full"
      inputMode={keyboard ? keyboard : undefined}
    />
  );
}

export default TextInput;
