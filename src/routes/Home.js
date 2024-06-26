import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import heroimg from '../assets/sekiro-shadows-die-twice-2019-4k-5b-1440x900.jpg';
import  VideosSection  from '../components/VideosSection.js';
import Scrolltotop from '../components/Scrolltotop.js';
import Footer from '../components/Footer.js';
import Blogsection from '../components/BlogComponents/Blogsection.js';
import Loading from './Loader/Loading.js';
import Products from '../components/Productcomp/Products.js';

const Home = () => {
  
  const[preloading,setPreloading]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setPreloading(false);
    }, 2000);
  },[]);
  useEffect(()=>{
    let title = "SHADOW TECH"
    document.title=title;
  });
  return preloading ? <Loading /> :(
    <>
        <Navbar />
        <Hero
          cName="hero"
          heroimg={heroimg}
          title="EXPLORE EXCITING NEW GAMES"
          text="Embark on a gaming odyssey with top 10 countdowns, seamless installations, epic story reviews, dynamic gameplay and fresh adventures your ultimate gaming experience awaits!"
          btntext="Explore Blogs and Videos"
          url="/"
          btnClass="show"
        />
        <VideosSection limit="-6" Filter="filter-off" heading="heading-on"/>
        <Blogsection heading="heading-on" limit="3"/>
        <Products />
        <Footer />
        <Scrolltotop />
    </>
  )
}

export default Home