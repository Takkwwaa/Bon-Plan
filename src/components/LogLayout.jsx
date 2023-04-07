import React from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../pages";
function LogLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default LogLayout;
