import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/Video.jpg';
import VideosSection from '../components/VideosSection';
import Footer from '../components/Footer';
import Scrolltotop from '../components/Scrolltotop.js';
import Loading from './Loader/Loading.js';


const Videos = (props) => {
  
  useEffect(()=>{
    let title = props.title;
    document.title=title;
  });
  const[preloading,setPreloading]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setPreloading(false);
    }, 2000);
  },[]);
  return preloading ? <Loading />:(
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