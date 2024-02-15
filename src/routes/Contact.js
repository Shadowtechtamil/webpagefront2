import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/contact.jpg';
import Scrolltotop from '../components/Scrolltotop.js';
import Footer from '../components/Footer.js';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
          cName="hero-mid"
          heroimg={heroimg}
          title="CONTACT"
          btnClass="hide"
        />
        <Footer />
        <Scrolltotop />
    </>
  )
}

export default Contact