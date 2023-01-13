import React from "react";
import "./Card.scss";

const Card = ({ logo, title, title2, color }) => {
  return (
    <div className={`card ${color}`}>
      <div className="card-logo">
        <img src={logo}></img>
      </div>
      <div className="card-title">
        <h4>{title}</h4>
        <p>{title2}</p>
      </div>
    </div>
  );
};

export default Card;
