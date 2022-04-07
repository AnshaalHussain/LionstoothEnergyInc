import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";

import "./careers.css";

const Careers = () => {
  return (
    <div>
      <NavBar />
      <div className="careers-container">
        <div className="careers-text-container">
          <h1>
            Join <span> Our Team</span>
          </h1>
          <p>
            Lionstooth is looking for highly effective & capable individuals who
            will excel at pursuing goals and results.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;
