import React from 'react';
import ReactMarkdown from 'react-markdown';
import YouTubePlayer from './YouTubePlayer';

interface LinkRendererProps {
  href: string;
  children: React.ReactNode;
}

const LinkRenderer: React.FC<LinkRendererProps> = ({ href, children }) => {
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

interface InfoBoxProps {
  text: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ text }) => {
  return (
    <div className="mt-1 p-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm rounded">
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => <p {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal ml-6" {...props} />,
          a: LinkRenderer,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};

export default InfoBox;
  
