import React from "react";
import { useState } from "react";

const Search = ({ listOfRestaurants, sendDataToParent }) => {
  const [searchText, setSearchText] = useState("");

  const sendData = () => {
    console.log("Fetching restaurant data..");
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    sendDataToParent(filteredRestaurant);
  };

  return (
    <div className="search-bar">
      <button className="button-search" onClick={sendData}>
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
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendData();
          }
        }}
      />
    </div>
  );
};

export default Search;
