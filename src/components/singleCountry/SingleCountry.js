import React from "react";
import "./singlecountry.css";

const SingleCountry = ({ name, flag, region }) => {
  return (
    <article className="card">
      <div className="card-img">
        <img src={flag} />
      </div>
      <div className="card-text">
        <h1>{name}</h1>
        <span>Continent: {region}</span>
        <span></span>
        <span></span>
      </div>
      <div className="card-button">
        <a href={"https://www.google.com/search?q=" + name} target="_blank">
          View
        </a>
      </div>
    </article>
  );
};

export default SingleCountry;
