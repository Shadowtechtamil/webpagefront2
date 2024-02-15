import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/back hero 3.jpg';
import Scrolltotop from '../components/Scrolltotop.js';
import Footer from '../components/Footer.js';
const Blog = () => {
  return (
    <>
      <Navbar />
      <Hero
          cName="hero-mid"
          heroimg={heroimg}
          title="LATEST ARTICLES"
          btnClass="hide"
        />
        <Footer />
        <Scrolltotop />
    </>
  )
}

export default Blog