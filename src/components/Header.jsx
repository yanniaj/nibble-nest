import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/564x/82/be/d4/82bed479344270067e3d2171379949b3.jpg"
          alt="corner-house-logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <Search />
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
