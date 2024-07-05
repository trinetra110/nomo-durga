import React from "react";
import "./About.css"; // Create this CSS file for About page styling
import profilePic from "../assets/Profile_pic.jpg"; // Add your profile picture image here
import githubLogo from "../assets/github-logo.png"; // Add your GitHub logo image here
import linkedinLogo from "../assets/linkedin-logo.png"; // Add your LinkedIn logo image here

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-card">
          <h2>ABOUT</h2>
          <p>
            Discover Kolkata’s Vibrant Durga Puja Pandals
            <br />
            <br />
            As a proud Bengali, Durga Puja holds a special place in my heart.
            From my childhood to the present day, I’ve witnessed countless Durga
            Pujas, each with its own unique charm and theme. These grand
            celebrations bring together family, friends, and the entire
            community. Now, I’m excited to share my passion with everyone
            through a comprehensive website that features a curated list of
            Kolkata’s famous Durga Puja pandals. Not only will it highlight
            their locations and directions, but it will also delve into the
            intricate themes that make each pandal a work of art. Join me in
            celebrating this joyous festival beyond the mainstream media’s
            coverage as we explore the hidden gems of Kolkata’s Durga Puja
            festivities.
          </p>
        </div>
        <div className="developer-card">
          <img src={profilePic} alt="Profile Pic" className="profile-pic" />
          <div className="developer-info">
            <div className="name">Ayan Mondal</div>
            <div className="role">Full-stack Developer</div>
            <div className="social-links">
              <a
                href="https://github.com/trinetra110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="GitHub" className="social-logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayan-mondal-063ba323b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedinLogo}
                  alt="LinkedIn"
                  className="social-logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
