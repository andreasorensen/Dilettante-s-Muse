import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo1.png'
import { ArtData
 } from '../../utils';
interface Props {
  setPieces: React.Dispatch<React.SetStateAction<ArtData[]>>
}

const NavBar: React.FC<Props> = ({setPieces}) => {
  return (
    <>
      <nav className='nav-container'>
        <NavLink onClick={()=> {setPieces([])}}to="/" className="home-page">Home</NavLink>
          <img className='logo' src={logo} alt="logo"/>
        <NavLink to="/saved" className="saved-art">Saved Art</NavLink>
      </nav>
    </>
  );
};

export default NavBar