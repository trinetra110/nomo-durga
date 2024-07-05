import React, { useState } from "react";
import "./DropdownSection.css";

const list = {
  North_Kolkata: {
    Bagbazar: {
      name: "Bagbazar Sarbojonin Durgotsab",
      image:
        "https://cms-article.forbesindia.com/media/images/2023/Oct/img_220979_1_33ye989-highres-bg.jpg",
      description:
        "This is a sample paragraph describing the Puja Pandal. Each pandal has its own unique theme and charm, attracting numerous visitors during the festival.",
      map: "https://www.google.com/maps/d/u/0/embed?mid=1pko2F_aOgtLS7V5LqtUXUcKsMgae7i4&ehbc=2E312F",
    },
    Kumartuli: {
      name: "Kumartuli Sarbojonin Durgotsab",
      image:
        "https://cms-article.forbesindia.com/media/images/2023/Oct/img_220979_1_33ye989-highres-bg.jpg",
      description:
        "This is a sample paragraph describing the Puja Pandal. Each pandal has its own unique theme and charm, attracting numerous visitors during the festival.",
      map: "https://www.google.com/maps/d/u/0/embed?mid=1pko2F_aOgtLS7V5LqtUXUcKsMgae7i4&ehbc=2E312F",
    },
  },
  South_Kolkata: {
    Rajdanga: {
      name: "Rajdanga Naba Uday Sangha",
      image:
        "https://cms-article.forbesindia.com/media/images/2023/Oct/img_220979_1_33ye989-highres-bg.jpg",
      description:
        "This is a sample paragraph describing the Puja Pandal. Each pandal has its own unique theme and charm, attracting numerous visitors during the festival.",
      map: "https://www.google.com/maps/d/u/0/embed?mid=1pko2F_aOgtLS7V5LqtUXUcKsMgae7i4&ehbc=2E312F",
    },
    Jadavpur: {
      name: "Jadavpur 8B Block Durga Puja",
      image:
        "https://cms-article.forbesindia.com/media/images/2023/Oct/img_220979_1_33ye989-highres-bg.jpg",
      description:
        "This is a sample paragraph describing the Puja Pandal. Each pandal has its own unique theme and charm, attracting numerous visitors during the festival.",
      map: "https://www.google.com/maps/d/u/0/embed?mid=1pko2F_aOgtLS7V5LqtUXUcKsMgae7i4&ehbc=2E312F",
    },
  },
};

function DropdownSection({ onPandalSelect }) {
  const [section, setSection] = useState("");
  const [pandal, setPandal] = useState("");

  const handleSectionChange = (event) => {
    setSection(event.target.value);
    setPandal("");
  };

  const handlePandalChange = (event) => {
    const selectedPandal = event.target.value;
    setPandal(selectedPandal);
    onPandalSelect(list[section][selectedPandal]);
  };

  const pandalOptions = section ? Object.keys(list[section]) : [];

  return (
    <div className="dropdown-section">
      <select className="dropdown">
        <option>Kolkata</option>
      </select>
      <select className="dropdown" onChange={handleSectionChange}>
        <option value="">Choose section</option>
        <option value="North_Kolkata">North Kolkata</option>
        <option value="South_Kolkata">South Kolkata</option>
      </select>
      <select className="dropdown" value={pandal} onChange={handlePandalChange}>
        <option value="">Choose pandal</option>
        {pandalOptions.map((pandalKey) => (
          <option key={pandalKey} value={pandalKey}>
            {list[section][pandalKey].name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownSection;
