import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../authService";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      authService.logout(); // call the logout function from the auth module
      navigate("/"); // redirect the user to the login page}
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div>
      <p>You have been logged out.</p>
    </div>
  );
};

export default Logout;
