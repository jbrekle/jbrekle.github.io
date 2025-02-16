import React from 'react';

// A simple tooltip that appears on hover using FontAwesome info icon.
function Tooltip({ text }) {
  return (
    <span className="relative group ml-2">
      <i className="fa fa-info-circle text-gray-500"></i>
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-gray-700 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {text}
      </span>
    </span>
  );
}

export default Tooltip;
