import React from "react";
import "./Card-style.css";

const Card = props => {
  return (
    <div className="card text-center">
      <div clasName="overflow">
        <img src={props.imgsrc} alt="image1" />
      </div>

      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secundary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          maiores id eius voluptatum aperiam laborum quidem accusantium
          reprehenderit consequatur beatae?
        </p>
        <a href="#" className="btn btn-outline-success">
          Go Anywhere
        </a>
      </div>
    </div>
  );
};

export default Card;
