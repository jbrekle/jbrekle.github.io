import React from 'react';

// A multiline text input (textarea).
// It supports mobile keyboard configuration via the "keyboard" prop.
function MultilineTextInput({ value, onChange, keyboard, onBlur }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      className="border rounded p-2 w-full"
      inputMode={keyboard ? keyboard : undefined}
      rows={4}
    />
  );
}

export default MultilineTextInput;
