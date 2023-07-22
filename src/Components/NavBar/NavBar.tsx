import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { ArtData } from "../../utils";

interface Props {
  setPieces: React.Dispatch<React.SetStateAction<ArtData[]>>;
}

const NavBar = ({ setPieces }: Props) => {
  return (
    <>
      <nav className="nav-container">
        <h1>Dilettante's Muse</h1>
        <NavLink
          to="/"
          className="home-page"
          onClick={() => {
            setPieces([]);
          }}
        >
          Home
        </NavLink>
        <NavLink to="/saved" className="saved-art">
          Saved Art
        </NavLink>
      </nav>
    </>
  );
};

// replace h1 with logo?

export default NavBar;
