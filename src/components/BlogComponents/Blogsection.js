import React, { useEffect, useState } from 'react'
import './Blogcss/Blogsection.css';
import json from '../../assets/videos.JSON';
import Serverloading from '../Serverloading';
const Blogsection = (props) => {

  // const[pageLoaderror,setPageloaderror]=useState(true);

  const pageloading=true;

  const heading=props.heading;

  const[blog,setBlog]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(json);
    
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            setBlog(data.blog);
          } catch (error) {
            console.error('Error fetching video data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className='blog-container'>
        <h1 className={heading}>Latest Articles</h1>
        <div className='blog-section'>
            {pageloading ?<Serverloading /> :blog.map(blogs => (
                <div key={blogs.id} className='blog-card'>
                    
                        <div className='blog-image-container'>
                            <img src='' alt='img' />
                        </div>
                        <div className='blog-content'>
                            <h3>{blogs.title}</h3>
                            <p>{blogs.content}</p>
                        </div>
                        <span id='rd-b'>Read</span>
                    </div>
                
            ))}
        </div>
    </div>
  )
}

export default Blogsection