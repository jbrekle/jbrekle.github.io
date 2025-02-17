import React from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * Explanation component renders a markdown text.
 * If noBubble is true, the blue border/background is omitted.
 */
function Explanation({ text, noBubble }) {
  const containerClass = noBubble ? '' : 'border p-4 bg-blue-50';
  return (
    <div className={containerClass}>
      <ReactMarkdown components={{ p: ({ node, ...props }) => <>{props.children}</> }}>
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default Explanation;
