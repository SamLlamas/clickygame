import React from "react";
import "./Hero.css";

const Hero = props => (
  <header className="hero text-center" style={{ backgroundImage: `url(${props.bg})` }}>
    {props.children}
  </header>
);

export default Hero;
