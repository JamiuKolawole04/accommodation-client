import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authContext } from "../../context/authContext";

const Navbar = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const style = {
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <div className="navbar d-flex justify-content-center">
      <div className="nav__container d-flex align-items-center justify-content-between">
        <Link to="/" style={style}>
          <span className="logo">zendbooking</span>
        </Link>

        {user ? (
          user.username
        ) : (
          <div className="nav__items">
            <button
              className="nav__button"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button className="nav__button" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
