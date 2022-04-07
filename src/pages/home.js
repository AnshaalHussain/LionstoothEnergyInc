import * as React from "react";
import NavBar from "../components/NavBar";
import logo from "../images/mainpage-placeholder.jpeg";

// import CarouselMainPage from "../components/carouselMainPage";

import "../components/carousel.css";
import SideKick from "../components/sidekick";
import MainPage from "../components/Main";
import "../components/main.css";
const IndexPage = () => {
  return (
    <div>
      <NavBar pageTitle="Home Page" />
      <MainPage />
    </div>
  );
};
export default IndexPage;
