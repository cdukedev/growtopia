import React from "react";
import "./CircleButton.scss";
import { Link } from "react-router-dom";
function CircleButton() {
  return (
    <div className="buttons-container">
      <div className="large-button">
        <span>Plants</span>
        <Link to="/plants" className="small-button">            
            <span>+</span>
        </Link>
      </div>
      <div className="large-button">
        <span>Garden</span>
        <div className="small-button">            
            <span>+</span>
        </div>
      </div>
      <div className="large-button">
        <span>Utilities</span>
        <div className="small-button">
            <span>+</span>
        </div>
      </div>
      <Link to="/tasks" className="large-button">
        <span>Tasks</span>
      </Link>
    </div>
  );
}

export default CircleButton;
