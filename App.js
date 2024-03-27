import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import ResCard from "./src/components/ResCard";
import mockData from "./src/utils/mockData2";
import { useState } from "react";

const AppLayout = () => {
  const [resList, setResList] = useState(mockData);

  return (
    <div className="AppLayout">
      <Header />
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = resList.filter(
            (res) => res.info.avgRating >= 4.5
          );
          setResList(filteredList);
        }}
      >
        Top rated restaurants
      </button>
      <div className="main-container">
        {resList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
