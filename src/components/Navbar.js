import { Link } from "react-router-dom";
import beerIcon from "./../beer-icon.png";

const Navbar = () => {
  return (
    <header className="nav-container">
      <nav>
        <Link to="/">
          <img src={beerIcon} alt="beer icon" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
