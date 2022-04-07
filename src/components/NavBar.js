import * as React from "react";
import "./NavBar.css";
import LTELogo from "../images/LTE-logo-colored.png";
import { Link } from "react-router-dom";

const NavBar = ({ pageTitle, children }) => {
  return (
    <div className="container">
      {/* <div className="nav-bar-layout">
        <div className="site-logo">
          <img alt="Lionstooth Energy Logo" src={LTELogo} />
        </div>
        <title>{pageTitle}</title>
        <nav>
          <ul className="nav-links">
            <li className="nav-link-item">
              <Link to="/" className="nav-link-text">
                Home
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/about" className="nav-link-text">
                Who We Are
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/operations" className="nav-link-text">
                Operations
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="site-body">{children}</main> */}

      <div className="nav-bar-layout">
        <div className="site-logo">
          <img alt="Lionstooth Energy Logo" src={LTELogo} />
        </div>
        <nav>
          <ul className="nav-links">
            <li className="nav-link-item">
              <Link to="/" className="nav-link-text">
                Home
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/about" className="nav-link-text">
                Who We Are
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/operations" className="nav-link-text">
                Operations
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/ourimpact" className="nav-link-text">
                Limiting Our Impact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="site-body">{children}</main>
    </div>
  );
};
export default NavBar;
