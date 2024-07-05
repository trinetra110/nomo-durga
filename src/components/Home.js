import React, { useState } from "react";
import Hero from "./Hero";
import DropdownSection from "./DropdownSection";
import Footer from "./Footer";
import Content from "./Content";
import "./Home.css";

const Home = () => {
  const [selectedPandal, setSelectedPandal] = useState(null);

  const handlePandalSelect = (pandal) => {
    setSelectedPandal(pandal);
  };

  return (
    <div>
      <Hero />
      <section className="list-city-map-section">
        <div className="list-city-map-card">
          <h2>List and city map</h2>
          <div className="content">
            <div className="left-content">
              <a href="path/to/your/pdf.pdf" className="pdf-button">
                Download PDF
              </a>
              <p>Ashche bochor abar hobe !</p>
            </div>
            <div className="right-content">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/d/u/0/embed?mid=1pko2F_aOgtLS7V5LqtUXUcKsMgae7i4&ehbc=2E312F"
                width="100%"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <DropdownSection onPandalSelect={handlePandalSelect} />
      {selectedPandal && (
        <Content
          heading={selectedPandal.name}
          imageSrc={selectedPandal.image}
          paragraphText={selectedPandal.description}
          mapLink={selectedPandal.map}
        />
      )}
      <Footer />
    </div>
  );
};

export default Home;
