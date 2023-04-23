import axios from "./axios";
const REGISTER_URL = "/api/login";
import { Link, useNavigate } from "react-router-dom";

const login = async (username, password) => {
  const response = axios.post(
    REGISTER_URL,
    JSON.stringify({
      username,
      password,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
  localStorage.setItem("token", response.token);
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token"); // remove the token from local storage
  window.location.reload(); // refresh the page to clear the user's session
};
export default { login, logout };
