import React, { useState, useEffect } from 'react';
import './PreLoadingbar.css'
const PreLoadingBar = () => {
  const totalTimeInMinutes = 1.7; // Total time in minutes
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now(); // Record the start time
    const endTime = startTime + totalTimeInMinutes * 60 * 1000; // Calculate the end time
    const updateProgress = () => {
      const currentTime = Date.now(); // Get the current time
      const elapsedTime = currentTime - startTime; // Calculate the elapsed time
      // const remainingTime = Math.max(0, endTime - currentTime); // Calculate the remaining time
      let currentProgress = (elapsedTime / (totalTimeInMinutes * 60 * 1000)) * 100; // Calculate progress in percentage
      currentProgress = Math.min(currentProgress, 100); // Clamp the progress to 100%
      setProgress(currentProgress); // Update progress state
      if (currentTime < endTime) {
        requestAnimationFrame(updateProgress); // Continue updating until end time
      }
    };
    requestAnimationFrame(updateProgress); // Start updating progress
  }, []);

  const parentDivStyle = {
    height: 30,
    width: '100%',
    backgroundColor: '#333',
    // padding:5,
  };
  //#1da1f2
  const childDivStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#F3E600',    
    textAlign: 'right',
  };

  const progressTextStyle = {
    padding: 10,
    fontSize:20,
    fontWeight: 500,
  };

  return (
    <div style={parentDivStyle} className='pld-con'>
      <div style={childDivStyle}>
        <span style={progressTextStyle} className='ptd-con'>{`${Math.round(progress)}%`}</span>
      </div>
    </div>
  );
};

export default PreLoadingBar;
