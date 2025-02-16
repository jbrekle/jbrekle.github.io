import React from 'react';

// A simple tooltip that appears on hover.
function Tooltip({ text }) {
  return (
    <span className="relative group ml-2">
      <svg
        className="w-4 h-4 inline-block text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9 12h1v1H9v-1zm0-8h1v6H9V4z"/>
      </svg>
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-gray-700 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {text}
      </span>
    </span>
  );
}

export default Tooltip;
  
