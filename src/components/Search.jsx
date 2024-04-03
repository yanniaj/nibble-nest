import React from "react";
import { useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState(""); //Fill search-box value

  return (
    <div className="search-bar">
      <button className="button-search">
        <img
          src={require("../../images/magnifying-glass-solid.svg")}
          alt="Search"
        />
      </button>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="SEARCH"
        style={{ color: "white" }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
