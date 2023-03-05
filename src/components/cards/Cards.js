import React from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./cards.css";
import { useState, useEffect } from "react";
const Cards = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((res) => {
        setData(res.data.results);
        setSearch(res.data.results);
      })

      .catch((err) => {});

    return () => {};
  }, []);

  const render = search.map((e) => {
    return <Card {...e} key={e.id} />;
  });
  return (
    <>
      <div className="btn">
        <button
        
          onClick={() => {
            setSearch(data);
          }}
        >
          All
        </button>{" "}
        <button
          onClick={() => {
            setSearch(data.filter((e) => e.status === "Alive"));
          }}
        >
          Alive
        </button>
        <button
          onClick={() => {
            setSearch(data.filter((e) => e.gender === "Male"));
          }}
        >
          Male
        </button>
        <button
          onClick={() => {
            setSearch(data.filter((e) => e.gender === "Female"));
          }}
        >
          Female
        </button>
      </div>
      <div className="cards">{render}</div>
    </>
  );
};

export default Cards;
