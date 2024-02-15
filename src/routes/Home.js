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

    window.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
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