import React from "react";
import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";

export default function MainLayout() {
  return <Outlet />;
}
