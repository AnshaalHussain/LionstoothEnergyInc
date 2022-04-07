import React from "react";
import { Link } from "react-router-dom";
import "./call-to-action.css";
const CallToActionButton = (props) => {
  return (
    <div>
      <Link to={props.page} className="call-to-action-link">
        <div className="call-to-action-container">
          <p>Learn More</p>
        </div>
      </Link>
    </div>
  );
};

export default CallToActionButton;
