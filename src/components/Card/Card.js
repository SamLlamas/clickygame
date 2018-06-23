import React from "react";
import "./Card.css"

const Card = props => (
    <div
      className="click-item"
      role="img"
      style={{
        backgroundImage: `url(${props.src})`
      }}
    />
  );
  
  export default Card;