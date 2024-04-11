import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../Header/Header";
import ResCard from "../ResCard/ResCard";
import Shimmer from "../Shimmer/Shimmer";
import "./Body.css";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleDataFromSearch = (data) => {
    setSearchResults(data);
  };

  const fetchData = async () => {
    const data = await fetch(
      // "https://proxy.cors.sh/" +
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51694058302456&lng=76.24346863478422&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // {
      //   headers: {
      //     "x-cors-api-key": "temp_929f648fd4b7b4bcb1b3b784041ac585",
      //   },
      // }
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchResults(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? ( // Conditional rendering
    <>
      <Header />
      <Shimmer />
    </>
  ) : (
    <div className="AppLayout">
      <Header
        listOfRestaurants={listOfRestaurants}
        sendDataToParent={handleDataFromSearch}
      />
      <div className="main-container">
        {searchResults.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
