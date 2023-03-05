import React from "react";
import "./showcountry.css";
import { useEffect, useState } from "react";
import SingleCountry from "../singleCountry/SingleCountry";

const ShowCountry = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const respons = await res.json();
    setData(respons);
  };
  console.log(data);
  const showCard = data.map((e) => {
    return (
      <SingleCountry
        name={e.name.common}
        flag={e.flags.svg}
        region={e.region}
      />
    );
  });
  useEffect(() => {
    getData();
  }, []);
  return <section className="cards">{showCard}</section>;
};

export default ShowCountry;
