import React from "react";

const Card = ({titre, img}) => {
  return (
    <div className="card-component">
        <img src={img} alt={titre}/>
        <div className="gradient" />
        <span className="card-title">{titre}</span>
    </div>
  );
};

export default Card;