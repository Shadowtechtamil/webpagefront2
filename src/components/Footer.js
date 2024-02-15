import React, { useEffect, useState } from 'react'
import './compCss/Footerstyle.css'
const Footer = () => {
  const[currentYear,setCurrentyear]=useState(new Date().getFullYear());

  useEffect(()=>
  {
    setCurrentyear(new Date().getFullYear());
  },[]);

  return (
    <div className='footer'>
        <div className='foot-top'>
          <div className='ft-t-logo-info'>
                  <h5>SHADOW TECH</h5>
                  <p>Your Gateway to Gaming Adventures</p>
                  <p>shadowtechofficial@gmail.com</p>
          </div>
        <div className='t-r-community'>
                    <h5>COMMUNITY</h5>
                    <section></section>
                    <a href='/'>Telegram</a>
                    <a href='/'>What's App</a>
                    <a href='/'>Broadcast</a>
                    <a href='/'>About Team</a>
        </div>
        <div className='t-r-help'>
                    <h5>Need Help ?</h5>
                    <a href='/'>Terms & Conditions</a>
                    <a href='/'>About</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Upcoming Games</a>
        </div>
        <div className='t-ss-container'>
                <div className='ss-socialmedia'>
                  <h5>FOLLOW US</h5>
                  <div className='ft-sm-li'>
                    <a href='/'>
                      <i class="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href='/'>
                      <i class="fa-brands fa-square-instagram"></i>
                    </a>
                    <a href='/'>
                      <i class="fa-brands fa-telegram"></i>
                    </a>
                  </div>
                </div>
                <div className='ss-ytsubs'>
                  <h5>SUBSCRIBE</h5>
                  <a href='/'>Shadow Tech</a>
                </div>
        </div>
        </div>
        <div className='foot-bottom'>
             <span>Copyright &copy; {currentYear} <a href='/'>Shadow tech</a> All Rights Reserved</span>
        </div>
    </div>
  )
}

export default Footer