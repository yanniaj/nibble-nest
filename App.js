import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body/Body";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import Error from "./src/components/Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return <Body />;
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
