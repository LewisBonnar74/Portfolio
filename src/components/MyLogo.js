import React, { Component } from "react";
import "../App.css";
import logo from "../assets/logo.png";

const MyLogo = () => {
  {
    return (
      <>
          <a href="/" className="logo-container">
            <img src={logo} alt="" className="my-logo" />
          </a>
      </>
    );
  }
};

export default MyLogo;
