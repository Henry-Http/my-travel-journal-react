import React from "react";
import globe from "../assets/images/globe.png";

export default function Header() {
  
  return (
    <div className="main-div">
      <header className="main-header">
        <img src={globe} className="globe" alt="logo"></img>
        <p>my travel journal.</p>
      </header>
    </div>
  );
}
