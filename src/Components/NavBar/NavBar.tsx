import './NavBar.css'
import { NavLink } from 'react-router-dom';

const NavBar = () => {


  return (
    <>
      <nav className='nav-container'>
        <h1>Dilettante's Muse</h1>
        <NavLink to="/" className="home">Home</NavLink>
        <NavLink to="/saved" className="saved-art">Saved Art</NavLink>
      </nav>
    </>
  )
}

export default NavBar