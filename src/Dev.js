import React, { useEffect, useState } from 'react';
import json from './assets/videos.JSON';

const Dev = () => {
  const [content, setContent] = useState('');
  const [isHtmlMode, setIsHtmlMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(json);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // Get content of the first item in the array and convert it to a string
        setContent(data.blog[0].content);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleHtmlMode = () => {
    setIsHtmlMode(!isHtmlMode);
  };

  const handleHtmlInputChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={toggleHtmlMode}>
          {isHtmlMode ? 'Switch to Rich Text' : 'Switch to HTML'}
        </button>
      </div>
      {isHtmlMode ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <textarea value={content} onChange={handleHtmlInputChange} />
      )}
    </div>
  );
};
export default Dev;
