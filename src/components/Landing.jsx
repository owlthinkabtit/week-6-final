import React from "react";
import movienight from "../assets/movienight.svg"
import Search from "../pages/Search";


const Landing = () => {
  return (
    <div className="app">
      <div className="flex-col">
        <section id="landing-page">
          <div className="content-wrapper__landing">
            <div className="flex-col">
              <h1 className="sub--title">Start your cinematic adventure <span className="orange">now</span></h1>
              <h2 className="sub--title2">with the power of <span className="blue">MoviePix</span></h2>
            </div>
              <Search />
            <img src={movienight} className="movie-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
