import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/about.jpg';
import Footer from '../components/Footer';
import Scrolltotop from '../components/Scrolltotop.js';

const About = () => {
  
  return (
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