import React from "react";
import MoviePix from "../assets/MoviePix.png";

const Landing = () => {
  return (
    <div className="app">
      <div className="flex-col">
        <header className="navbar">
          <div className="content-wrapper">
            <div class="logo">
              <img className="logo-img" src={MoviePix} alt="" />
            </div>
            <div className="links">
              <div className="nav-link">
                <a href="/">Home</a>
                <a href="/">Find Movies</a>
                <a href="/">Random</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Landing;
