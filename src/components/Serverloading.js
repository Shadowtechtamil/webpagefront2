import React from 'react'
import './compCss/Serverloadingstyle.css'
import PreLoadingBar from '../PreLoadingbar.js';
const Serverloading = () => {
  return (
    <div className='servrloading-container'>
      <div className='word-div'>
          <ul className='words' id='list-load'>
            <li>Almost Done...</li>
            <li>This might take a moment...</li>
            <li>While we fetch the data...</li>
            <li>Please wait...</li>
          </ul>
        </div>
        <div className='progressbar-con'>
             <PreLoadingBar />
        </div>
    </div>
    
  )
}

export default Serverloading