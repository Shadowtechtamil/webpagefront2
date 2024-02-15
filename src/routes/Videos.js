import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/back hero 3.jpg';
import VideosSection from '../components/VideosSection';
import Footer from '../components/Footer';
import Scrolltotop from '../components/Scrolltotop.js';

const Videos = () => {
  return (
    <>
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
    </>
  )
}

export default Videos