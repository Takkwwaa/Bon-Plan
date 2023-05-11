import React, { useMemo } from "react";
import { Unauthenticated, Authenticated } from "./Routes.jsx";
import { RouterProvider, Link } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./UserContext.js";

const App = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={providerValue}>
      <RouterProvider router={true ? Authenticated : Unauthenticated} />
    </UserContext.Provider>
  );
};
export default App;
