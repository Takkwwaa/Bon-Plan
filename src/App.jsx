import React, { useMemo, useEffect, useState } from "react";
import { Unauthenticated, Authenticated } from "./Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import authService from "./authService.js";
import authStore from "./authStore.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token && Number.isInteger(parseInt(token))) {
          // Token is a valid integer
          console.log("Token is an integer:", parseInt(token));
          const storeData = await authStore.fetchStore(parseInt(token));
          setUser(storeData);
        } else {
          const userr = await authService.fetchUserProfile();
          setUser(userr);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <UserContext.Provider value={providerValue}>
      <RouterProvider router={token ? Authenticated : Unauthenticated} />
    </UserContext.Provider>
  );
};

export default App;
