import { Component } from 'react';
import './compCss/NavbarStyle.css';
import { Link, NavLink } from 'react-router-dom';
import {Menuitem} from './Menuitem.js';


class Navbar extends Component
{
    state={clicked: false};

    handleClick =()=>
    {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        
        return(
            <nav className='navbar-container'>
                <Link className='navbar-logo' to="/">
                    <div className='logo-img'></div>
                    <h1>SHADOW TECH</h1>
                </Link>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa-solid fa-times':'fa-solid fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ?'nav-menu active':'nav-menu'}>
                    {Menuitem.map((item,index)=>{
                        return(
                            <li key={index}>
                             <NavLink
                                style={({ isActive }) => 
                                (isActive ? {backgroundColor: '#e5a102',color:'#121013'} : {backgroundColor: ''})}
                                className={item.cName} to={item.url}>{item.title}
                             </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}
export default Navbar