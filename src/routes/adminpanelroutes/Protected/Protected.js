import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Authuser=()=>
    {
        const user={login:false};

        return user && user.login;
    }
const Protected = () => {

    const isAuth=Authuser();
    

  return isAuth ? <Outlet /> : <Navigate to='/' />
}

export default Protected