import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideKick from "./sidekick";
import SideKickImage1 from "../images/wind-energy.jpg";
import SideKickImage2 from "../images/solar-panels.jpg";
import SideKickImage3 from "../images/power-lines.jpg";
import "./main.css";

const Hero = (props) => {
  return (
    <div className="container-main">
      <div className="hero-image">
        <img alt="Nature path" src={props && props.logo} />
      </div>
      <div className="image-overlay-container">
        <div className="image-overlay">
          <div className="overlay-text">
            <div className="header-blurb-container">
              <h4>{props && props.title}</h4>

              <p>{props && props.blurb}</p>
            </div>
          </div>
          {/* <div className="learn-more-container">
            <Link to="/about" className="learn-more-arrow">
              Learn More
            </Link>

            <FaAngleRight className="highlight" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
