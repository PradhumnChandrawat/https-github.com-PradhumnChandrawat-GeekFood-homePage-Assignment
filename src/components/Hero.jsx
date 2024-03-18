import React from "react";
import "./Hero.css";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Let us find your</h1>
        <h1>Forever Food.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipiscing elit. Nesciunt illo
          tenetur fuga ducimus numquam ea!
        </p>
        <div className="hero-buttons">
          <div className="search-btn-div">
            <button className="btn search-btn">Search Now</button>
          </div>
          <div className="know-more-btn-div">
            <button className="btn know-more-btn">Know more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
