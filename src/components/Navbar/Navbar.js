import React from "react";
import "./Navbar.css";

const Navbar = props =>
<nav id= "navBar" className="navbar navbar-light bg-light">
        <span className="navbar-brand h1">
        <p id="info">{props.title}</p>
    
        <p id="fail">{props.fail}</p>
  
  <p id="score">Score: {props.score}</p>

  <p id="topScore">Top Score: {props.topScore}</p>
        
        </span>
    </nav>;

export default Navbar;

