import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ title, body, image }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} className="card-image" />
        <h4>{title}</h4>
      </div>
      <div className="info-button-container">
        <div className="card-body">{body}</div>
        
          <button className="card-button"><Link to="/plants/1" className="link">+</Link></button>
        
      </div>
    </div>
  );
}

export default Card;
