import React from "react";
// import "../../App.css";
import "./container.css";
const Container = ({ color, children }) => {
  return (
    <div className="container" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default Container;
