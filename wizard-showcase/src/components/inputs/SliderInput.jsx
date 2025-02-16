import React from 'react';

// A slider input using HTML input type "range".
function SliderInput({ value, min, max, onChange }) {
  return (
    <div>
      <input 
        type="range" 
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
      <div className="text-right text-sm">{value}</div>
    </div>
  );
}

export default SliderInput;
  
