import React from 'react'
import './css/Navpanel.css'
import { Link } from 'react-router-dom'

const Navpanel = () => {
  return (
    <div className='navpanel'>
        <Link className='navpanel-logo' to="/">
                    <div className='logo-img'></div>
                    <h1>SHADOW TECH</h1>
        </Link>
    </div>
  )
}

export default Navpanel