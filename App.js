import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return <Body />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: "",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
