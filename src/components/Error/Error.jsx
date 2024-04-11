import React from "react";
import "./Error.css";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ textAlign: "center", padding: "5%", fontSize: "30px" }}>
      Oops! You have encountered an error ☹️
      <br />
      <br />
      {err.status}: {err.statusText}
    </div>
  );
};

export default Error;
