import axios from "./axios";

const fetchlocalisation = async (loc) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(loc, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default { fetchlocalisation };
