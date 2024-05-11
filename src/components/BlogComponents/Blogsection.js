import React, { useEffect, useState } from 'react'
import './Blogcss/Blogsection.css';
import json from '../../assets/videos.JSON';
import Serverloading from '../Serverloading';
const Blogsection = (props) => {

  // const[pageLoaderror,setPageloaderror]=useState(true);

  // const[pageLoaderror,setPageloaderror]=useState(true);
  const  pageLoaderror=true;
  const limit=props.limit;
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
            const recentData = data.blog;
            
            if (limit) {
              setBlog(recentData.slice(limit).reverse());
            } else {
              setBlog(recentData.reverse());
            }

            // setPageloaderror(false);
            // setBlog(data.blog);
          } catch (error) {
            // setPageloaderror(true);
            console.error('Error fetching video data:', error);
          }
        };
    
        fetchData();
      }, [limit]);

  return (
    <div className='blog-container'>
        <h1 className={heading}>Latest </h1>
        <div className='blog-section'>
            {pageLoaderror ?<Serverloading /> :blog.map(blogs => (
                <div key={blogs.id} className='blog-card'>
                        <div className='blog-image-container'>
                            <img src='' alt='img' />
                        </div>
                        <div className='blog-content'>
                            <p><i class="fa-regular fa-clock"></i> {blogs.posteddate}</p>
                            <h3>{blogs.title}</h3>
                        </div>
                        <span id='rd-b'>Read More <i className="fa-solid fa-caret-right"></i></span>
                    </div>
            ))}
        </div>
        {/* <div className='view-m-btn'>
                <button>Read More</button>
        </div> */}
    </div>
  )
}

export default Blogsection