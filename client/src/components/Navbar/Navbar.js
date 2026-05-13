import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  const renderAuthLinks = () => {
    if (!user.name) {
      return (
        <div>
          <Link id="link" to="/login">
            Login
          </Link>
          <Link id="link" to="/signup">
            Signup
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link id="link" to="/logout">
            Logout
          </Link>
          <p id="username">
            Hii {" "}
            <Link id="link" to="/profile">
              {user.name}
            </Link>
          </p>
        </div>
      );
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link id="link" to="/">
          Home
        </Link>

        {renderAuthLinks()}
      </div>
      <div className="lowerDesign"></div>
    </div>
  );
};

export default Navbar;