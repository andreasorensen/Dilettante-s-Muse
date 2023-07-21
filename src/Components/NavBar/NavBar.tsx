import './NavBar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const NavBar: React.FC = () => {
  return (
    <>
      <nav className='nav-container'>
        <img className='logo' src={logo} alt="logo"/>
        <NavLink to="/" className="home-page">Home</NavLink>
        <NavLink to="/saved" className="saved-art">Saved Art</NavLink>
      </nav>
    </>
  )
};

// replace h1 with logo? 

export default NavBar