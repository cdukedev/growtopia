import React from "react";
import "./Card.scss";

function Card({ title, body, image }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} className="card-image" />
        <h4>{title}</h4>
      </div>
      <div className="info-button-container">
        <div className="card-body">{body}</div>
        <button className="card-button">+</button>
      </div>
    </div>
  );
}

export default Card;
