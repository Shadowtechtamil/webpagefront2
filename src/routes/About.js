import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/about.jpg';
import Footer from '../components/Footer';
import Scrolltotop from '../components/Scrolltotop.js';
import Loading from './Loader/Loading.js';

const About = () => {
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
  return isLoading ? (<Loading />): (
    <>
      <Navbar />
      <Hero
          cName="hero-mid"
          heroimg={heroimg}
          title="ABOUT STORY"
          btnClass="hide"
        />
        <Footer />
        <Scrolltotop />
    </>
  )
}

export default About