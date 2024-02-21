import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/contact.jpg';
import Scrolltotop from '../components/Scrolltotop.js';
import Footer from '../components/Footer.js';
import Loading from './Loader/Loading.js';


const Contact = (props) => {
  
  const[preloading,setPreloading]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setPreloading(false);
    }, 2000);
  },[]);

  useEffect(()=>{
    let title = props.title;
    document.title=title;
  });

  return preloading ? <Loading/> :(
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