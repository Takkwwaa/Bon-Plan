import React from "react";
import { Unauthenticated, Authenticated } from "./Routes.jsx";
import { RouterProvider, Link } from "react-router-dom";

const App = () => {
  const Boom = true;
  return <RouterProvider router={Boom ? Unauthenticated : Authenticated} />;
};
export default App;
