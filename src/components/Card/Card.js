import React from "react";
import "./Card.scss";

function Card({ title, body, image }) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={image} className="card-image" />
        <h4>{title}</h4>
      </div>
      <div className="card-body">{body}</div>
    </div>
  );
}

export default Card;
