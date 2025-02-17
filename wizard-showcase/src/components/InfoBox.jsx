import React from 'react';
import ReactMarkdown from 'react-markdown';
import YouTubePlayer from './YouTubePlayer';

// Custom link renderer to inline YouTube videos.
const LinkRenderer = ({ href, children }) => {
  if (href && (href.includes('youtu.be') || href.includes('youtube.com'))) {
    let videoId = '';
    const ytRegex = /(?:youtu\.be\/|v=)([^&]+)/;
    const match = href.match(ytRegex);
    if (match && match[1]) {
      videoId = match[1];
    }
    return <YouTubePlayer videoId={videoId} />;
  }
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
};

// Displays an informational message below a question.
// Renders markdown so that images and videos embedded in the text are displayed without wrapping <p> tags.
function InfoBox({ text }) {
  return (
    <div className="mt-1 p-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">
      <ReactMarkdown components={{ p: ({ node, ...props }) => <>{props.children}</>, a: LinkRenderer }}>
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default InfoBox;
