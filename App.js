import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import ResCard from "./src/components/ResCard";
import resList from "./src/utils/mockData2";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51694058302456&lng=76.24346863478422&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="AppLayout">
      <Header />
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setListOfRestaurants(filteredList);
        }}
      >
        <span className="button_top"> Top rated restaurants</span>
      </button>
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
