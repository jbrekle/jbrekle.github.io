import React from 'react';

// Embeds a YouTube video via an iframe.
function YouTubePlayer({ videoId }) {
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="my-2">
      <iframe 
        width="100%" 
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubePlayer;
  
