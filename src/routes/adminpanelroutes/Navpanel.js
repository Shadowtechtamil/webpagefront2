import React from 'react'
import './css/Navpanel.css'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Navpanel = () => {
  const navigate = useNavigate();
    const { setAuth } = useAuth();
    const logout = () => {
        localStorage.removeItem('auth');
        setAuth(null);
        navigate('/');
    };
  return (
    <div className='navpanel'>
        <div>
          <Link className='navpanel-logo' to="/">
                      <div className='logo-img'></div>
                      <h1>SHADOW TECH</h1>
          </Link>
        </div>
        <div className='admin-logout-btn'>
          <button onClick={logout}>LOGOUT <i class="fa-solid fa-right-from-bracket"></i></button>
        </div>
    </div>
  )
}

export default Navpanel