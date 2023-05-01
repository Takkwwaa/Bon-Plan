import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../UserContext";

function LogLayout() {
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

export default LogLayout;
