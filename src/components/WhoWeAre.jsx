import * as React from "react";

import logo from "../images/mainpage-hero.jpeg";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
import HeroImage from "../images/three-electric-lines.jpg";
import SideKick from "./sidekick";

import SideKickImage1 from "../images/oil-refinery.jpg";
import SideKickImage2 from "../images/thermal-powerplant.jpg";
import SideKickImage3 from "../images/electrician-willmill.jpg";

import HeadShot1 from "../images/headshot-1.jpg";
import HeadShot2 from "../images/headshot-2.jpg";
import HeadShot3 from "../images/headshot-3.jpeg";

import "./who-we-are.css";

const About = () => {
  return (
    <div>
      <NavBar />

      <Hero
        logo={HeroImage}
        title="Who We Are"
        blurb="The team at Lionstooth has been involved with over 120 MW of Projects designed, construction, and operated, since 2009. "
      />
      {/* 
      <div className="separating-container"></div> */}
      <div className="our-team-intro-container">
        <p>
          Lionstooth has, and will continue to, keep our team small & nimble,
          comprised of highly effective & capable people.
        </p>
      </div>
      <div className="who-we-are-sidekicks-container">
        <SideKick
          image={SideKickImage1}
          title="Fit-for-Purpose"
          blurb="Projects are designed to fit within their environment, for their intended purpose, not form the environment to fit the Project. "
        />
        <SideKick
          image={SideKickImage3}
          title="Economic"
          blurb="Lionstooth will invest our own capital in on-site power solutions, leading to reduced operating costs, while increasing reliability & efficiency."
        />
        <SideKick
          image={SideKickImage2}
          title="Creative"
          blurb="Focused on creative solutions, including technical and commercial constructs that put the power back in the control of those who use it."
        />
      </div>
      {/* <div className="separating-container"></div> */}

      <div className="our-team-header-container">
        <h1>Our Team</h1>
      </div>
      <div className="our-team-container">
        <div className="our-team-cards-container">
          <div className="who-we-are-info-container">
            <h3>President & CEO</h3>
            <div className="who-we-are-info-image-container">
              <img src={HeadShot3}></img>
            </div>
            <div className="who-we-are-info-paragraph-container">
              <h2>Geoff Lester</h2>

              <p>
                Geoff has over 20 years of experience in the energy industry,
                the last 10 years building and operating power generation
                projects. Geoff has a passion for generating results, and saving
                customers money.
              </p>
            </div>
          </div>
          <div className="who-we-are-info-container">
            <h3>BD, Markets & Regulatory</h3>
            <div className="who-we-are-info-image-container">
              <img src={HeadShot2}></img>
            </div>
            <h2>Erika Goddard</h2>
            <p>
              Erika has over 15 years of North American electricity market
              experience ranging from fundamental supply and demand analytics,
              to developing power generation projects, to regulatory and market
              policy advocacy. Erika is passionate about efficient outcomes.
            </p>
          </div>
          <div className="who-we-are-info-container">
            <h3>Project Manager</h3>
            <div className="who-we-are-info-image-container">
              <img src={HeadShot1}></img>
            </div>
            <h2>Trevor Lewis</h2>
            <p>
              Trevor has 4 years of project management experience split between
              the energy industry and environmental consulting. Trevor is
              passionate about the energy sector and delivering successful and
              sustainable projects.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
