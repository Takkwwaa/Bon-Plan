import axios from "./axios";
const REGISTER_URL = "/api/login";
const login = async (username, password) => {
  const response = axios.post(
    REGISTER_URL,
    JSON.stringify({
      username,
      password,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};
export default { login };
