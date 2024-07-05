import React from "react";
import "./Content.css";

const Content = ({ heading, imageSrc, paragraphText, mapLink }) => {
  return (
    <div className="content-card">
      <h2>{heading}</h2>
      <div className="image-container">
        <img src={imageSrc} alt="Puja Pandal" className="pandal-image" />
      </div>
      <h3>Picture credits: To their respective owners</h3>
      <p>{paragraphText}</p>
      <div className="map-container">
        <iframe
          title="Google Maps"
          src={mapLink}
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Content;
