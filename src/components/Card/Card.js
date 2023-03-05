import React from "react";
import Button from "../Button/Button";
import "./card.css";
const Card = ({ name, status, species, gender, image }) => {
  return (
    <div className="wrapper">
      <div className="single-card">
        <div className="front">
          <img className="front" src={image} />
        </div>
        <div className="back">
          <div className="content">
            <h4>{name}</h4>
            <h2>{status}</h2>
            <span>{gender}</span>
            <span>{species}</span>

            <span className="socials">
              <Button />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
