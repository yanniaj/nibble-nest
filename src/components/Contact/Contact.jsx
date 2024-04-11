import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="primary-container">
      <div className="left-pane">
        <img
          src={require("../../../images/customer-service.png")}
          alt="customer-service.png"
        />
      </div>
      <div className="right-pane">
        <h1>Tell us how we can help you</h1>
        <form action="" id="feedback-form">
          <div className="fname">
            <label htmlFor="fname">First name</label>
            <input type="text" placeholder="First name" />
          </div>
          <div className="lname">
            <label htmlFor="lname">Last name</label>
            <input type="text" placeholder="Last name" />
          </div>
          <div className="email">
            <label htmlFor="email">Email address</label>
            <input type="text" placeholder="Email address" />
          </div>
          <div className="issue">
            <label htmlFor="issue">Issue Description</label>
            <br />
            <textarea name="" id="issue" cols="50" rows="10"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
