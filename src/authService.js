import jwtDecode from "jwt-decode";
import axios from "./axios";

const REGISTER_URL = "/api/login";
const login = async (username, password) => {
  const response = await axios.post(
    REGISTER_URL,
    JSON.stringify({
      username,
      password,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
  console.log(response);
  localStorage.setItem("token", response.data.token);

  return response.data;
};

const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const t = token;
  const id = jwtDecode(t).id;
  console.log(id);
  const response = await axios.get(`/api/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token"); // remove the token from local storage
  window.location.reload(); // refresh the page to clear the user's session
};
export default { login, logout, fetchUserProfile };
