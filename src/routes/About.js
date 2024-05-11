import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/about.jpg';
import Footer from '../components/Footer';
import Scrolltotop from '../components/Scrolltotop.js';
import Loading from './Loader/Loading.js';
import Aboutus from '../components/Aboutus.js';

const About = (props) => {

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

  return preloading ? <Loading />: (
    <>
      <Navbar />
      <Hero
          cName="hero-mid"
          heroimg={heroimg}
          title="ABOUT STORY"
          btnClass="hide"
        />
        <Aboutus />
        <Footer />
        <Scrolltotop />
    </>
  )
}

export default About