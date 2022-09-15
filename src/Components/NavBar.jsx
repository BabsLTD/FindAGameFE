import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useAuth } from "../security/authContext";
import { getUserByID } from "../Utility/api";
import { guestUserIcon } from "../Images/card.images";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { currentUser } = useAuth();
  const [userIcon, setUserIcon] = useState("");

  useEffect(() => {
    if (currentUser)
      getUserByID(currentUser.uid).then((data) => {
        setUserIcon(data.profile_icon);
      }).catch(err =>{
        setUserIcon(guestUserIcon)
      })
  }, [currentUser]);

  return (
    <nav className="navbar">
      <Link to="/" className="homelink">
        Home
      </Link>
      <div className="display">
        <ul>
          <div className="active">
            <CustomLink to="/events" className="eventslink">
              Games
            </CustomLink>
          </div>
          <div className="active">
            <CustomLink to="/account" className="accountlink">
              Account
            </CustomLink>
          </div>
        </ul>
        {currentUser ? (
          <img className="userimage" src={userIcon} alt="userimage"></img>
        ) : (
          <img className="guestuserimage" src={guestUserIcon} alt="guest"></img>
        )}
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
