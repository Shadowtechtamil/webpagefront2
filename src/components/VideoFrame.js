import React from 'react'
import './compCss/VideoFrame.css';
import Video from './Video';
import Description from './Description';
const VideoFrame = (props) => {

  return (
    <>
        <div className='main-frame'>
            <Video

                 id={props.id}
                 title={props.title}
                 url={props.url}
                 date={props.date}
            />
            <Description data={props.des}/>
      </div>
    </>
  )
}

export default VideoFrame