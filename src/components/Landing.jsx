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
                <a href="/" className="nav-link">Home</a>
                <a href="/" className="nav-link">Find Movies</a>
                <a href="/" className="nav-link">Random</a>
            </div>
          </div>
        </header>
        <section id="landing-page">
          <div className="content-wrapper__landing">
            <div className="flex-col">
              <h1 className="sub--title">Start your cinematic adventure <span className="orange">now</span></h1>
              <h2 className="sub--title2">with the power of <span className="blue">MoviePix</span></h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
