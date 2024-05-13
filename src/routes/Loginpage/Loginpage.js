import React, { useEffect, useRef, useState } from 'react'
import './LoginStyle.css'
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Loginpage = () => {

    useEffect(()=>{
        document.title="LOGIN";
    },[]);

    const {setAuth}=useAuth();

    const navigate=useNavigate();
    const location=useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef=useRef();

    const[userName,setUserName]=useState('');
    const[userPassword,setUserPassword]=useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
            navigate(from, { replace: true });
        }
    });
    const onSubmit=async (e)=>
    {
        e.preventDefault();
        if(userName === "Sabari" && userPassword === "3211")
        {
            // setLoggedIn(true);
            setAuth({userName,userPassword});
            localStorage.setItem('auth', JSON.stringify({ userName, userPassword }));
            setUserName('');
            setUserPassword('');
            navigate(from, { replace: true });
        }
        else{
            // setLoggedIn(false);
            setUserPassword('');
        }
    };
    
    const cancelbtn=()=>
    {
        setUserName('');
        setUserPassword('');
        navigate('/');
    }

  return (
    <div className='login-main-container'>
            <div className='login-form-container'>
                <div className='login-logo-container'>
                    <div className='login-logo'></div>
                    <h1>SHADOW TECH</h1>
                    <h3>ADMIN LOGIN</h3>
                </div>
                <div className='login-form'>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div>
                            <label htmlFor='username'></label>
                            <input 
                                type='text'
                                name='username'
                                id='username'
                                ref={userRef}
                                autoComplete='off'
                                placeholder='USERNAME'
                                value={userName}
                                onChange={(e)=>setUserName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor='password'></label>
                            <input 
                                type='text'
                                name='password'
                                id='password'
                                placeholder='PASSWORD'
                                value={userPassword}
                                onChange={(e)=>setUserPassword(e.target.value)}
                            />
                        </div>
                        <div id='btn-log-ad'>
                            <button className='btn-login' id="btn-c" onClick={cancelbtn}>Cancel</button>
                            <button className='btn-login'  type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Loginpage