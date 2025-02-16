import React, { useState } from 'react';

// A section that can be collapsed or expanded.
function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border rounded mb-4">
      {/* Header that toggles the section */}
      <div 
        className="bg-gray-200 p-2 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold">{title}</span>
        <span>{open ? "-" : "+"}</span>
      </div>
      {open && <div className="p-4">{children}</div>}
    </div>
  );
}

export default CollapsibleSection;
  
