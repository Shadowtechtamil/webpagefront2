import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Sideitems } from './Sideitems';
import './css/Bottomnav.css';

const Bottomnav = () => {
    const location=useLocation();

    return (
      <div className='bottom-con'>
      <div className='bottombar'>
        <ul className='bottom-menu'>
          {Sideitems.map((item,index) => (
            <li key={index}>
              <NavLink
              id='botton-bar-links'
               className={location.pathname === `/admin/${item.url}` ? `${item.cName} side-active` : item.cName}
               to={item.url === '' ? '' : `/admin/${item.url}`}
              ><i className={item.iconName}></i>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
  };
  

export default Bottomnav