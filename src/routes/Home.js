import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import heroimg from '../assets/back hero 3 (3).jpg';
import  VideosSection  from '../components/VideosSection.js';
import Scrolltotop from '../components/Scrolltotop.js';
import Loading from './Loader/Loading.js';
import Footer from '../components/Footer.js';

const Home = () => {

  const[isLoading,setLoading]=useState(true);
  
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Set loading to false when the page is fully loaded
    };
  
    const handleUnload = () => {
      setLoading(true); // Set loading to true before navigating away from the page
    };
  
    window.addEventListener('load', handleLoad);
    window.addEventListener('beforeunload', handleUnload);
  
    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('beforeunload', handleUnload);
      setLoading(false);
    };
  }, []);



  return isLoading ?<Loading /> : (
    <>
        <Navbar />
        <Hero
          cName="hero"
          heroimg={heroimg}
          title="EXPLORE EXCITING NEW GAMES"
          text="Embark on a gaming odyssey with top 10 countdowns, seamless installations, epic story reviews, dynamic gameplay, and fresh adventures  your ultimate gaming experience awaits!"
          btntext="Explore Blogs and Videos"
          url="/"
          btnClass="show"
        />
        <VideosSection limit="-6" Filter="filter-off" heading="heading-on"/>
        <Footer />
        <Scrolltotop />
    </>
  )
}

export default Home