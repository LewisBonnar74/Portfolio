import React from "react";
import github from "../assets/github.png";
import "../App.css";
import mail from '../assets/mail.png'

const LinksBar = () => {
  {
    return (
      <>
        <div className="styled-icon-container">
          <a href="https://github.com/LewisBonnar74" className="styled-icon-link">
            <img src={github} alt="" className="styled-github"/>
          </a>
          <a href="mailto:contact@lewisbonnar.dev">
            <img src={mail} alt="" className="styled-mail"/>
          </a>
        </div>
      </>
    );
  }
};

export default LinksBar;
