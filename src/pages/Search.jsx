import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div class="input-wrapper">
      <form id="form">
        <input type="text" placeholder="Search..." id="search" class="search--landing" />
      </form>
      <div class="search--wrapper">
        <FontAwesomeIcon icon="search" className="fa-search" />
      </div>
    </div>
  );
};

export default Search;
