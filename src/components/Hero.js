import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <h1 className="hero-title">Nomo Durga</h1>
      <p className="hero-subtitle">
        You can find the list of all the famous Durga puja pandals and their
        locations here
      </p>
      {/*<iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1pko2F_aOgtLS7V5LqtUXUcKsMgae7i4&ehbc=2E312F"
        width="640"
        height="480"
        title="Google Maps"
      ></iframe>*/}
    </div>
  );
}

export default Hero;
