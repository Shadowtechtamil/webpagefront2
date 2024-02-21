import React from 'react'
import './Loading.css'
import logo from '../../assets/logo.png';
const Loading = () => {
  return (
    <div id="preloader">
        <div class="ring">
            <img src={logo} alt='' />
        </div>
    </div>
    
  )
}

export default Loading