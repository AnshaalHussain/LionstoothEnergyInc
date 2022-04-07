import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";

import OurImpactHeroImage from "../images/powerplant.jpg";

import SideKick from "./sidekick";

import SideKickImage1 from "../images/solar-panel-closeup.jpg";
import "./our-impact.css";

import SideKickImage2 from "../images/crane.jpg";

import SideKickImage3 from "../images/mountain-shot.jpg";

const LimitingOurImpact = () => {
  return (
    <div>
      <NavBar />
      <Hero
        title="Limiting Our Impact"
        blurb="Electricity is undergoing a global period of transition & transformation as power is becoming more democratized & decentralized. "
        logo={OurImpactHeroImage}
      />

      <div className="our-impact-container">
        <SideKick
          image={SideKickImage1}
          title="Low-Carbon Experts"
          blurb="Pursing low-carbon Projects, including solar, gas-fired, cogeneration, & waste energy recovery, developed independently or as on-site power solutions. "
        />
        <SideKick
          image={SideKickImage2}
          title="Carbon Capture & Disposal "
          blurb="Embracing net-zero electricity targets necessitates carbon capture solutions. "
        />
        <SideKick
          image={SideKickImage3}
          title="Enabling Renewables
          "
          blurb="Reliable, dispatchable power supplies are crucial to ensuring the lights stay on, when traditional renewables are not available. "
        />
      </div>
      <Footer />
    </div>
  );
};

export default LimitingOurImpact;
