import React from "react";
import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <div className="img">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              alt="logo"
              className="logo-img"
            />
          </div>
          <span className="logo-name">
            <a href="/"></a>GeekFood
          </span>
        </div>
        <div className="nav-links">
          <ul className="links">
            <li className="link">Home</li>
            <li className="link">Quote</li>
            <li className="link">Resturants</li>
            <li className="link">Foods</li>
            <li className="link">Contact</li>
          </ul>
        </div>
        <div className="btn">
          <button className="sub-btn">Get Started</button>
        </div>
      </div>
    </>
  );
}
