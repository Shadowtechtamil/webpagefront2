import React, { useState, useEffect } from 'react';

const VideoPlayer = ({ vdetails }) => {
  const [vidyardScriptLoaded, setVidyardScriptLoaded] = useState(false);

  useEffect(() => {
    // Load the Vidyard script dynamically
    const script = document.createElement('script');
    script.src = 'https://play.vidyard.com/embed/v4.js';
    script.async = true;
    script.onload = () => setVidyardScriptLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (vidyardScriptLoaded && vdetails.vUrl) {
      // Embed Vidyard player when the script is loaded and video ID is available
      window.vidyard = window.vidyard || [];
      window.vidyard.push({
        type: 'inline',
        videoId: vdetails.vUrl,
      });
    }
  }, [vidyardScriptLoaded, vdetails.vUrl]);

  return (
    <div>
      <h2>Video Player</h2>
      <div id="vidyard-player"></div>
      <video src={vdetails.vUrl} />
    </div>
  );
};

export default VideoPlayer;
