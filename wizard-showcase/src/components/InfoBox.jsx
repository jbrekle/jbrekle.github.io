import React from 'react';
import ReactMarkdown from 'react-markdown';

// Displays an informational message below a question.
// Renders markdown so that images and videos embedded in the text are displayed.
function InfoBox({ text }) {
  return (
    <div className="mt-1 p-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export default InfoBox;
