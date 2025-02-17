import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * BigTileChoice renders options as equally sized rectangular tiles.
 * Each tile displays a label, an optional image, and a markdown-enabled explanation.
 */
function BigTileChoice({ options, value, onChange }) {
  return (
    <div className="flex space-x-4">
      {options.map(option => {
        const isSelected = value === option.id;
        return (
          <div
            key={option.id}
            className={`border rounded p-4 flex-1 cursor-pointer hover:opacity-75 transition-colors ${isSelected ? 'bg-gray-300' : 'bg-white'}`}
            onClick={() => onChange(option.id)}
          >
            <div className="text-lg font-bold mb-2">{option.label}</div>
            {option.image && (
              <img src={option.image} alt={option.label} className="w-full h-32 object-cover mb-2" />
            )}
            <ReactMarkdown>{option.explaination}</ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
}

export default BigTileChoice;
