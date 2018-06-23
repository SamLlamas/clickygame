import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <li className="">Click an image to begin!</li>
      <li>Score: 0 | Top Score: 0</li>
    </ul>
  </nav>
);

export default Navbar;
