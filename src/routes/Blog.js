import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import heroimg from '../assets/bloghero.png';
import Scrolltotop from '../components/Scrolltotop.js';
import Footer from '../components/Footer.js';
import Blogsection from '../components/BlogComponents/Blogsection.js';
import Loading from './Loader/Loading.js';

const Blog = (props) => {

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

  return preloading ? <Loading /> :(
    <>
      <Navbar />
      <Hero
          cName="hero-mid"
          heroimg={heroimg}
          title="LATEST ARTICLES"
          btnClass="hide"
        />
        <Blogsection heading="heading-off"/>
        <Footer />
        <Scrolltotop />
    </>
  )
}

export default Blog