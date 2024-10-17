import React from "react";
import MoviePix from "../assets/MoviePix.png";

const Nav = () => {
  return (
    <header className="navbar">
      <div className="content-wrapper">
        <div class="logo">
          <img className="logo-img" src={MoviePix} alt="" />
        </div>
        <div className="links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/" className="nav-link">
            Find Movies
          </a>
          <a href="/" className="nav-link">
            Random
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
