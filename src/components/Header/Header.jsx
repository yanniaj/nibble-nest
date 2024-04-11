import React from "react";
import Search from "../Search/Search";
import "./Header.css";

import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

const Header = ({ listOfRestaurants, sendDataToParent }) => {
  const [authState, setAuthState] = useState("Log in");

  return (
    <div className="header">
      <div className="logo-container">
        <a href="">
          <img src={LOGO_URL} alt="corner-house-logo" />
        </a>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <Search
            listOfRestaurants={listOfRestaurants}
            sendDataToParent={sendDataToParent}
          />
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <li
            onClick={() =>
              setAuthState(authState === "Log in" ? "Log out" : "Log in")
            }
            style={{ width: "80px" }}
          >
            {authState}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
