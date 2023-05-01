import React from "react";
import { Unauthenticated, Authenticated } from "./Routes.jsx";
import { RouterProvider, Link } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const token = localStorage.getItem("token");

  return <RouterProvider router={token ? Authenticated : Unauthenticated} />;
};
export default App;
