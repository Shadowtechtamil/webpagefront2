import axios from 'axios';
import React, { useEffect, useState } from 'react'
import base_url from '../../api/bootapi';
import './css/Contentstyle.css';
import Viewscount from './Viewscount';
import EditModal from './EditModal';

const Content = () => {

  const[content,setContent]=useState([]);

  useEffect(()=>
  {
    
    const getAll=async ()=>
        {
          await axios.get(`${base_url}/info`).then(
            (response)=>{
              const recentdata=response.data;
                setContent(recentdata.reverse());
            },
            (error)=>{
              setTimeout(getAll,5000);
            }
          )
        };
        getAll();
  },[]);

    //date formate
    const formatDate = (apiDateString) => 
    {
      const apiDate = new Date(apiDateString);
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = monthNames[apiDate.getMonth()];
      const day = apiDate.getDate();
      const year = apiDate.getFullYear();

      return `${month}-${day}-${year}`;
    };

    //edit modal
    const[isEdmoadlopen,setIsEdmodalopen]=useState(false);
    const[selectedVd,setSelectedVd]=useState(null);

    const openModal=(data)=>
    {
      setSelectedVd(data);
      setIsEdmodalopen(true);
    }

    const closeModal=(data)=>
    {
      setIsEdmodalopen(false);
      if(data)
      {
        window.location.reload(true);
      }
      
    }
  
  return (
    <>
    <div className='video-table'>
      <table>
        <thead>
          <tr>
            <th>Video</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Views</th>
            <th>Likes</th>
          </tr>
        </thead>
         <tbody>
            {content.map((data)=>
            (
              <tr key={data.vId}>
                <td>
                  <section className='video-column-1'>
                    <section className='video-thumb' onClick={()=>openModal(data)}>
                      <img src={`https://i.ibb.co${data.tUrl}`} alt='thumbnail' loading='lazy'/>
                    </section>
                    <h3>{data.vTitle}</h3>
                  </section>
                </td>
                <td>{formatDate(data.uploadDate)}</td>
                <td>{data.vDur}</td>
                <td>{<Viewscount id={data.vUrl} />}</td>
                <td>1</td>
              </tr>
            ))
            }
          </tbody> 
      </table>
      <EditModal isOpen={isEdmoadlopen} closeModal={closeModal} vd={selectedVd} />
    </div>
    </>
    
  )
}

export default Content