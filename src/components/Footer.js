import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <a href="https://www.vecteezy.com/free-photos">
        Free Stock photos by Vecteezy
      </a> */}
      <div className="footer-container-topbar"></div>

      <div className="footer-container-body">
        <div className="contactus-links-container">
          <div className="footer-links-container">
            <p>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </p>

            <p>
              <Link to="/about" className="footer-link">
                Company
              </Link>
            </p>
            <p>
              <Link to="/careers" className="footer-link">
                Careers
              </Link>
            </p>
            <p>
              {" "}
              <Link to="/operations" className="footer-link">
                Operations
              </Link>
            </p>
          </div>

          <div className="contactus-container">
            <h3>Contact us</h3>
            <div className="contactus-text-container">
              <p>640, 633 6 Ave SW Calgary</p>
              <p>AB T2P 2Y5</p>
              <p>info@lionstoothenergy.com</p>
            </div>
          </div>
        </div>

        <div className="attributions">
          <p>Lionstooth Energy Inc. Copyright 2022</p>
          <p>
            <a href="https://www.vecteezy.com/free-photos">
              Free Stock photos by Vecteezy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
