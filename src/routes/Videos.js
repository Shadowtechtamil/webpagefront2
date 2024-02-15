import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/back hero 3.jpg';
import VideosSection from '../components/VideosSection';
import Footer from '../components/Footer';
import Scrolltotop from '../components/Scrolltotop.js';
import Loading from './Loader/Loading.js';

const Videos = () => {
  const[isLoading,setLoading]=useState(true);
  
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Set loading to false when the page is fully loaded
    };

    window.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
      setLoading(false);
    };
  }, []);
  return (
    <>
    {isLoading ?<Loading />:(
      <div>
      <Navbar />
      <Hero
          cName="hero-mid"
          heroimg={heroimg}
          title="EXCLUSIVE CONTENTS"
          btnClass="hide"
        />
      <VideosSection Filter="filter-on" heading="heading-off" />
      <Footer />
      <Scrolltotop />
      </div>
      )}
    </>
  )
}

export default Videos