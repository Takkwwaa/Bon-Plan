import React, { useState, useMemo, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function MainLayout() {
  return <Outlet />;
}
