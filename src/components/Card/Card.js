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
        <div className="more-info-button">
          <p>
            <Link to="/plants/1" className="link">
              More Info
            </Link>
          </p>
          <button className="card-button">+</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
