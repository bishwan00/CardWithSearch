import React from "react";
import "./Button.css";

function Button({ text = "button" }) {
  return (
    <div className="containerr">
      <button className="btnn btn-diactive ">{text}</button>
    </div>
  );
}

export default Button;
