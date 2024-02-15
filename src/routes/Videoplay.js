import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react';
import VideoFrame from '../components/VideoFrame';
import axios from 'axios';
import base_url from '../api/bootapi';
const Videoplay = () => {

  const {videoId}=useParams();
  const [videoDetails,setVideoDetails]=useState(null);
  useEffect(()=>
  {
    const fetchData=async ()=>
    {
      try{
      const getAll=async ()=>
        {
          await axios.get(`${base_url}/watch/${videoId}`).then(
            (response)=>
            {
                const videodata=response.data;
                setVideoDetails(videodata);
            },
            (error)=>{
              console.log(error);
            }
          )
        };
        getAll();
      }
      catch(error)
      {
        console.log("Erro",error);
      }
    };
    fetchData();
  },[videoId]);

  return (
    <>
      <Navbar />
        {videoDetails &&(
          <>
            <VideoFrame 
                id={videoDetails.vId}
                title={videoDetails.vTitle}
                url={videoDetails.vUrl}
                date={videoDetails.uploadDate}
                des={videoDetails.description}
            />
          </>
        )}
      
    </>
  )
}

export default Videoplay