import React from 'react'
import './css/Upload.css'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const UploadContent = () => {

  const location=useLocation();
  const formcontent=[
      {
        
        title:"Video",
        url:"video",
        cName:"Video-up-btn" 
    },
    {
       
        title:"Blog",
        url:"blog",
        cName:"Video-up-btn"
    }
  ]

  return (
    <div className='upload-container'>
      <div className='flex-con'>
         {formcontent.map((item,index) => (
          <div className='Form-container' key={index}>
            <NavLink
             className={location.pathname === `/admin/upload/${item.url}` ? `${item.cName} side-active` : item.cName}
             to={item.url === '' ? '' : `/admin/upload/${item.url}`}
            >
              {item.title}  
            </NavLink>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default UploadContent