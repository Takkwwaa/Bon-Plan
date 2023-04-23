import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../authService";

const Logout = () => {
  //   const navigate = useNavigate();
  useEffect(() => {
    authService.logout(); // call the logout function from the auth module
    // navigate("/"); // redirect the user to the login page
  }, []);

  return (
    <div>
      <p>You have been logged out.</p>
    </div>
  );
};

export default Logout;
