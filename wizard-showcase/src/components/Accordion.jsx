import React, { useState } from 'react';

// A simple accordion component.
function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded mb-4">
      <div 
        className="bg-gray-100 p-2 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold">{title}</span>
        <span>{open ? "▲" : "▼"}</span>
      </div>
      {open && <div className="p-4">{children}</div>}
    </div>
  );
}

export default Accordion;
  
