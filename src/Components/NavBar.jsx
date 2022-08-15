import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/account">Account</Link>
      </nav>
    </div>
  );
};

export default NavBar;
