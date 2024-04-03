import React from "react";
import Search from "./Search";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [authState, setAuthState] = useState("Log in");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="corner-house-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <Search />
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
