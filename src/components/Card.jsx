import React from "react";
import "./Card.css";

export function Card() {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae
          incidunt perferendis soluta facilis voluptas dicta repudiandae quasi
          asperiores libero, exercitationem molestiae autem sapiente dolore
          nulla non consequatur. Eaque, dolores.
        </p>
      </div>
      <div className="card-footer">
        <img
          src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
          alt="Gladis Lennon"
          className="card-image"
        />
        <div className="card-info">
          <h5 className="card-name">Gladis Lennon</h5>
          <p className="card-title">Head of SEO</p>
        </div>
      </div>
    </div>
  );
}
