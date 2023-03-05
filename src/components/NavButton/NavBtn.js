import React from "react";
import "./navbtn.css";

const NavBtn = ({ text, handleClick, color }) => {
  return (
    <div>
      <a
        style={{ backgroundColor: color }}
        href="#"
        className="active button"
        onClick={handleClick}
      >
        {text}
      </a>
    </div>
  );
};

export default NavBtn;
