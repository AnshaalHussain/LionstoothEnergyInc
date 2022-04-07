import * as React from "react";

import logo from "../images/mainpage-hero.jpeg";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
import HeroImage from "../images/electric-poles.jpg";

import WilsonCreekPlant from "../images/wilson-powerplant.jpg";

import NorthWestAb from "../images/forest-powerlines.jpg";

import Alberta2 from "../images/gas-pumps.jpeg";
import "./operations.css";

const Operations = () => {
  return (
    <div>
      <NavBar />
      <Hero
        logo={HeroImage}
        title="Projects"
        blurb="Generating power, where it is needed, using highly-efficient, carbon forward technologies:"
      />

      <div className="operations-container ">
        <div className="operations-header">
          <h1>Wilson Creek Power Plant</h1>
          <div className="image-blurb-container">
            <p>
              9 MW gas-fired generation supplying the local distribution system,
              located NW of Rimbey, AB. Located on lands that have already been
              clear for industrial purposes, limiting impacts to area
              stakeholders & the environment. On track for a 12-month
              development timeline. In-Service Q3-2022
            </p>

            <div className="operations-image-container">
              <img className="img-border-black" src={WilsonCreekPlant}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="operations-container grey-strip">
        <div className="operations-header">
          <h1>NW AB #1 </h1>
          <div className="image-blurb-container">
            <p>
              20 MW gas-fired generation, located adjacent to existing oil & gas
              production facilities, limiting impacts to the surrounding
              environment & supplying power to the local distribution system.
              In-Service Q4-2022.
            </p>

            <div className="operations-image-container">
              <img className="img-border-white" src={NorthWestAb}></img>
            </div>
          </div>
        </div>
      </div>

      <div className="operations-container">
        <div className="operations-header">
          <h1>Alberta #2 </h1>
          <div className="image-blurb-container">
            <p>
              20 MW gas-fired generation, operating over all-hours to supply
              on-site power & the local distribution system. In-Service 2023.
            </p>

            <div className="operations-image-container">
              <img className="img-border-black" src={Alberta2}></img>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Operations;
