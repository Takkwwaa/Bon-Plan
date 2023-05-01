import React, { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function MainLayout() {
  const [user, setUser] = useState(null);

  const providerValue = useMemo;
  {
    () => [user, setUser], [user, setUser];
  }
  return (
    <UserContext.Provider value={providerValue}>
      <Outlet />
    </UserContext.Provider>
  );
}
