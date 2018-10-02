import React from "react";
import "./Cards.css";

const Cards = props => (
<div 
    className="card" 
    value={props.id} 
    onClick={() => props.userClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Cards;

