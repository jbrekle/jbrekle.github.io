import React from 'react';

/**
 * This component implements an email input that allows plus sign usage
 * (e.g. "john+test@example.com"). The HTML5 "type=email" generally permits
 * plus signs, but some older browsers may not. We assume modern HTML standards.
 */
function EmailInput({ value, onChange, onBlur }) {
  return (
    <input
      type="email"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      className="border rounded p-2 w-full"
      placeholder="name+tag@example.com"
    />
  );
}

export default EmailInput;
