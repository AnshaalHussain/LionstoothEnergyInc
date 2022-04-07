import * as React from "react";
import axios from "axios";
import logo from "../images/mainpage-hero.jpeg";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideKick from "./sidekick";
import SideKickImage1 from "../images/wind-energy.jpg";
import SideKickImage2 from "../images/solar-panels.jpg";
import SideKickImage3 from "../images/power-lines.jpg";
import Footer from "./Footer";

import CallToActionButton from "./CallToActionButton";

const MainPage = () => {
  // const id = "40863106";
  // axios({
  //   method: "get",
  //   url: `https://api.linkedin.com/v1/companies/${id}/updates?format=json`,
  //   headers: {
  //     "Access-Control-Allow-Origin": true,
  //   },
  // }).then((response, error) => {
  //   console.log("response", response);
  //   console.log("response", error);
  // });

  return (
    <div>
      {/* <div className="container">
        <img alt="Nature path" src={logo} className="image" />
        <div className="image-overlay">
          <p className="overlay-text">
            Lionstooth believes that electricity can be more innovative and
            sustainable if power is developed and operated locally, where power
            is needed.
          </p>
        </div>
      </div>
      <div className="cards-container">
        <SideKick
          title="Innovative"
          image="../images/innovative-placeholder.jpeg"
        />
        <SideKick title="Sustainable" />
        <SideKick title="Local" />
      </div> */}

      <div className="container-main">
        <div className="hero-image">
          <img alt="Nature path" src={logo} />
        </div>
        <div className="image-overlay-container">
          <div className="image-overlay">
            <div className="overlay-text">
              <div className="header-blurb-container">
                <h4>MW's in Development</h4>

                <p>
                  Lionstooth believes that electricity can be more innovative
                  and sustainable if power is developed and operated locally,
                  where power is needed.
                </p>
              </div>
            </div>
            <div className="learn-more-container">
              <Link to="/about" className="learn-more-arrow">
                Learn More
              </Link>

              <FaAngleRight className="highlight" />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="body-container"></div> */}
      <div className="body-text-container">
        <div className="body-text">
          <p>
            We build, own and operate power generation solutions that are...
          </p>
        </div>
        <div className="sidekick-container">
          <SideKick
            title="Innovative"
            image={SideKickImage1}
            blurb="Relying on our decade of power project development experience, Lionstooth is focused on projects that can be developed from concept to commissioning in 9 to 12 months. "
          >
            <CallToActionButton page="/about" />
          </SideKick>

          <SideKick
            title="Sustainable"
            image={SideKickImage2}
            blurb="Utilizing highly efficient technologies, paired with advanced carbon solutions, resulting in low-carbon Projects."
          >
            <CallToActionButton page="/ourimpact" />
          </SideKick>
          <SideKick
            title="Local"
            image={SideKickImage3}
            blurb="Local power solutions, focused on the distribution grid, the same wires system that delivers electricity to your doorstep. "
          >
            <CallToActionButton page="/operations" />
          </SideKick>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
