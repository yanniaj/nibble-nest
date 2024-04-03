import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import ResCard from "./src/components/ResCard";
import Shimmer from "./src/components/Shimmer";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51694058302456&lng=76.24346863478422&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
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
      <Header />
      <div className="main-container">
        {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
