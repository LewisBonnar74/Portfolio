import React from "react";
import "../App.css";
import github from "../assets/github.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";

const imageSources = [github, mail, linkedin];

const linkSources = ['https://github.com/LewisBonnar74', "mailto:contact@lewisbonnar.dev", 'https://www.linkedin.com/in/lewisbonnar/']

const LinksBar = () => {
  {
    return (
      <div className="links-container">
        <ul className="links-list">
          {imageSources.map((src, index) => (
            <li key={index} className="link-li">
            <a href={linkSources[index]} target="_blank">
              <img src={src} alt={`Image ${index}`} className="link-img"/>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default LinksBar;
