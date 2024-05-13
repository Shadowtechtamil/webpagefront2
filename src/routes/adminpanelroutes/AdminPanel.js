import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navpanel from './Navpanel'
import './css/Adminpanel.css'
import Sidebar from './Sidebar'
import Bottomnav from './Bottomnav'

const AdminPanel = () => {
  useEffect(()=>{
    let title = "ADMIN PANEL";
    document.title=title;
  });
  
  return (
    <div className='Admin-container'>
      <Navpanel />
      <main className='flex-container'>
        <aside>
          <Sidebar />
        </aside>
        <div className='content'>
          <Outlet />
          <Bottomnav />
        </div>
      </main>
    </div>
  )
}

export default AdminPanel