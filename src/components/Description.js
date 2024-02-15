import React from 'react'
import './compCss/Description.css';
const Description = (props) => {
  const highlightLink = (text) => {
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(linkRegex, '<a href="$1" target="_blank"><span class="custom-link">$1</span></a>');
  };

  return (
    <div className='des-frame'>
        <div className='des-container'>
                <h1>Description</h1>
                <div className='des-content'>
                   <div dangerouslySetInnerHTML={{ __html: highlightLink(props.data) }} />
                </div>
        </div>
    </div>
  )
}

export default Description