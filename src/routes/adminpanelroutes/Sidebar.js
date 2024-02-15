import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './css/Sidepanel.css';
import { Sideitems } from './Sideitems.js';

const Sidebar = () => {
  const location=useLocation();

  return (
    <div className='sidebar'>
      <ul className='side-menu'>
        {Sideitems.map((item,index) => (
          <li key={index}>
            <NavLink
             className={location.pathname === `/admin/${item.url}` ? `${item.cName} side-active` : item.cName}
             to={item.url === '' ? '' : `/admin/${item.url}`}
            ><i className={item.iconName}></i>
              <span className='side-bar-title'>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
