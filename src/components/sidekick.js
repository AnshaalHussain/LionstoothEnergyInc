import * as React from "react";
import "./sidekick.css";

const SideKick = (props) => {
  return (
    <div className="card-body">
      <div className="card-body-container">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.blurb}</p>
      </div>

      <div className="card-container">{props.children}</div>
    </div>
  );
};

export default SideKick;
