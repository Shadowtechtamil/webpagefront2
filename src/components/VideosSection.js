import React, { useEffect, useState } from 'react'
import './compCss/VideosStyle.css'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import baseurl from '../api/bootapi.js'
import axios from 'axios';
import Viewscount from '../routes/adminpanelroutes/Viewscount.js';
import Serverloading from './Serverloading.js';

const VideosSection = (props) => {

    const [videos,setVideos]=useState([]);
    const[pageLoaderror,setPageloaderror]=useState(true);


    const limit=props.limit;
    const heading =props.heading;


    const navigate=useNavigate();
    const routepath=(props)=>
      {
       const  path =`/watch/${props}`;
        navigate(path);
      }
    
      //axious for fetch video datas from API

      
  useEffect(() => {
    const getAll = async () => {
      try {
        const response = await axios.get(`${baseurl}/info`);
        const recentData = response.data;
        
        if (limit) {
          setVideos(recentData.slice(limit).reverse());
        } else {
          setVideos(recentData.reverse());
        }
        
        setPageloaderror(false);
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
        setPageloaderror(true);
        // Retry logic with exponential backoff
        setTimeout(getAll, 5000); // Retry after 5 seconds
      }
    };

    getAll();
  }, [limit]);


      //formate date for showing secs,minutes,hours,days,weeks,months,years like 1 minuts ago,15 hours ago etc..,
      const formatTimeDifference = (postedDate) => {
        const now = moment();
        const diffInSeconds = now.diff(postedDate, 'seconds');
        if (diffInSeconds < 60) {
          return `${diffInSeconds} seconds ago`;
        } else if (diffInSeconds < 3600) {
          const diffInMinutes = now.diff(postedDate, 'minutes');
          return `${diffInMinutes} minutes ago`;
        } else if (diffInSeconds < 86400) {
          const diffInHours = now.diff(postedDate, 'hours');
          return `${diffInHours} hours ago`;
        } else if (diffInSeconds < 2592000) {
          const diffInDays = now.diff(postedDate, 'days');
          return `${diffInDays} days ago`;
        } else if (diffInSeconds < 31536000) {
          const diffInMonths = now.diff(postedDate, 'months');
          return `${diffInMonths} months ago`;
        } else {
          const diffInYears = now.diff(postedDate, 'years');
          return `${diffInYears} years ago`;
        }
      };
      

  return (
    <div className='Video-Container'>
        <h1 className={heading}>Latest Videos</h1>
        <div className='video-section'>
        
            { pageLoaderror ? <Serverloading /> : videos.map((video) => 
               (
                <div key={video.vId}
                 
                  className='video-card' 
                  onClick={()=>{routepath(video.vUrl);}}
                >
                    <div className='thumb'>
                        <img src={`https://i.ibb.co${video.tUrl}`} alt='thumbnail' loading='lazy'/>
                        <div className='vid-duriation'><p>{video.vDur}</p></div>
                    </div>
                    <h3 className='vid-title'>{video.vTitle}</h3>
                    <div className='card-vd-details'>
                      <span><Viewscount id={video.vUrl}/></span><span>Views</span>
                      <span>{formatTimeDifference(moment(video.uploadDate))}</span>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
}


export default VideosSection
