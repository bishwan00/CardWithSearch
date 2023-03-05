import "../../App.css";
import Button from "../Button/Button";
import NavBtn from "../NavButton/NavBtn";
import { useState } from "react";

const Navbar = () => {
  const [color, setColor] = useState("red");
  const [isLogedIn, setIsLogedIn] = useState(true);

  const handleClick = (e) => {
    isLogedIn ? setColor("rgb(0, 170, 122)") : setColor("red");

    setIsLogedIn(!isLogedIn);
  };
  return (
    <header>
      <div className="logo">
        <svg
          width="34"
          height="42"
          viewBox="0 0 34 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-bkkfTU bXNcFD"
        >
          <path
            d="M33.3918 16.6589C33.3918 21.2589 31.529 25.4255 28.5124 28.4383C25.4996 31.4549 21.333 33.3177 16.733 33.3177V16.6589H0V0H16.733C25.9311 0 33.3918 7.45505 33.3918 16.6589Z"
            fill="#01C28C"
          ></path>
          <g opacity="0.3">
            <path
              opacity="0.3"
              d="M16.7311 16.6589V33.3196L0 16.6589H16.7311Z"
              fill="#01C28C"
            ></path>
          </g>
          <path
            d="M20.183 41.5825H0V21.4014L20.183 41.5825ZM2.0624 39.5201H15.2028L2.0624 26.3797V39.5201Z"
            fill="#01C28C"
          ></path>
        </svg>
      </div>
      <div className="humburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="/d" className="active">
              About
            </a>
          </li>
          <li>
            <a href="/d" className="active">
              Services
            </a>
          </li>
          <li>
            <a href="/d" className="active">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/d" className="active">
              blog
            </a>
          </li>
          <li>
            <a href="/d" className="active bit">
              bit
            </a>
          </li>
          <li>
            {isLogedIn ? (
              <NavBtn text="Log Out" color={color} handleClick={handleClick} />
            ) : (
              <NavBtn color={color} handleClick={handleClick} text="Log In" />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
