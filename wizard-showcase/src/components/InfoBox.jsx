import React from 'react';

// Displays an informational message below a question.
function InfoBox({ text }) {
  return (
    <div className="mt-1 p-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">
      {text}
    </div>
  );
}

export default InfoBox;
  
