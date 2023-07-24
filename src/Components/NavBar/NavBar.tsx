import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo1.png'

const NavBar: React.FC = () => {
  return (
    <>
      <nav className='nav-container'>
        <NavLink to="/" className="home-page">Home</NavLink>
          <img className='logo' src={logo} alt="logo"/>
        <NavLink to="/saved" className="saved-art">Saved Art</NavLink>
      </nav>
    </>
  )
};

export default NavBar