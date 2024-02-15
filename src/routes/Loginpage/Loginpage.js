import React from 'react'
import './LoginStyle.css'

const Loginpage = () => {

    const onSubmit=async (e)=>
    {
        e.preventDefault();
    };

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
                                placeholder='USERNAME'
                            />
                        </div>
                        <div>
                            <label htmlFor='password'></label>
                            <input 
                                type='text'
                                name='password'
                                id='password'
                                placeholder='PASSWORD'
                            />
                        </div>
                        <div>
                            <button className='btn-login' type='reset'>Cancel</button>
                            <button className='btn-login' type='submit'>LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default Loginpage