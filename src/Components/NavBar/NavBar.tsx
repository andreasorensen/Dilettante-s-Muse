import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {

  return (
    <>
      <nav className='nav-container'>
        <h1>Dilettante's Muse</h1>
        <NavLink to="/" className="home-page">Home</NavLink>
        <NavLink to="/saved" className="saved-art">Saved Art</NavLink>
      </nav>
    </>
  )
};

// replace h1 with logo? 

export default NavBar