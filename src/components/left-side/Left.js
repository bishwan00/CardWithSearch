import React from "react";
import "./left.css";
import { useState } from "react";
const Left = ({ handleClick }) => {
  const [select, setSelect] = useState(true);
  return (
    <div className="left">
      <span
        onClick={() => {
          handleClick(true);
          setSelect(false);
        }}
        className={!select ? "select" : ""}
      >
        Insert Blog
      </span>
      <span
        onClick={() => {
          handleClick(false);
          setSelect(true);
        }}
        className={select ? "select" : ""}
      >
        Show Blog
      </span>
    </div>
  );
};

export default Left;
