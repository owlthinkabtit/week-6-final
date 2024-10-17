import React from "react";
import { FontAwesomeIcon} from "@fontawesome/react-fontawesome";

const Search = () => {
  return (
    <div class="input-wrap">
      <form id="form">
        <input type="text" placeholder="Search..." id="search" class="search" />
      </form>
      <div class="search-wrapper">
        <FontAwesomeIcon icon="faSearch" />
      </div>
    </div>
  );
};

export default Search;
