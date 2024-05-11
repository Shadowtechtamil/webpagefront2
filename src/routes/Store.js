import React, { useEffect, useState } from 'react'
import Loading from './Loader/Loading';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import heroimg from '../assets/bg.jpg';
import Footer from '../components/Footer';
import Scrolltotop from '../components/Scrolltotop';
import ProductStore from '../components/Productcomp/ProductStore';


const Store = () => {
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

  return preloading ? <Loading /> : (
    <>
       <Navbar />
       <Hero
          cName="hero-mid"
          heroimg={heroimg}
          title="ACCESSORIES STORE"
          btnClass="hide"
        />
      <ProductStore />
      <Footer />
      <Scrolltotop />
    </>
  )
}

export default Store