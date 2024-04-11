import React from "react";
import Header from "../Header/Header";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="left-container">
          <h1>Delicious food delivered straight to your doorstep</h1>
          <br />
          <p>
            ⏳Quality and timely delivery are our bread and butter😉
            <br />
            <br />
            Trust us, we won't let your taste buds down!🤩
          </p>
        </div>
        <div className="right-container">
          <img
            src={require("../../../images/delivery-person.png")}
            alt="delivery-person"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
