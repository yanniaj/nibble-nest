import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body/Body";
import About from "./src/components/About/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return <Body />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
