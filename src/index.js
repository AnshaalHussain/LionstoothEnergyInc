import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import About from "./components/WhoWeAre";
import Operations from "./components/Operations";
import Careers from "./components/Careers";

import LimitingOurImpact from "./components/LimitingOurImpact";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="operations" element={<Operations />} />
      <Route path="ourimpact" element={<LimitingOurImpact />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
