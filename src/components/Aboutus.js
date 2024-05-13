import React from 'react'
import './compCss/Aboutus.css';

const Aboutus = () => {
  return (
    <div className='about-con'>
        <h1>ABOUT US</h1>
        <div className='about-content'>
           <p>Welcome to ShadowTech, your ultimate destination for all things gaming.</p>
           
           <p>We're more than just a website we're a passionate community of gamers who live and breathe gaming culture. Whether you're here for the latest gaming news, insightful reviews, or exclusive content, we've got something for every type of gamer.</p>

           <p> Our curated selection of gaming videos covers everything from top 10 game lists to in-depth reviews, offering fresh perspectives and unique insights you won't find elsewhere. Plus, our team personally tests and handpicks gaming gear, from controllers to laptops, to ensure that every product enhances your gaming experience.</p>

            <p>But ShadowTech is more than just a content platform. It's a place where gamers come together to connect, share experiences, and celebrate our shared love for gaming. Join our global community and be part of the excitement.</p>

           <p>Welcome to ShadowTech where gaming thrives.</p>
        </div>
        {/* <div className='our-team'>
            <h1>Meet Our Team</h1>
            <div className='team-section'>
                <div className='team-card'>
                        Team memner 1
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Aboutus