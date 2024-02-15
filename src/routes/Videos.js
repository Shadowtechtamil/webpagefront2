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
    // Simulate content loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay time as needed

    // Clean up timeout to prevent memory leaks
    return () => clearTimeout(timeout);
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