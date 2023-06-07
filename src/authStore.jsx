import axios from "axios";

const checkStore = async (email, password) => {
  try {
    const response = await axios.get("https://127.0.0.1:8000/api/stores");
    const userData = response.data; // Assuming the retrieved user data is an array

    const foundUser = userData.find(
      (userObj) => userObj.email === email && userObj.password === password
    );

    if (foundUser) {
      const userId = foundUser.id;
      console.log("User exists with ID:", userId);
      localStorage.setItem("token", userId);
      return userId;
    } else {
      console.log("User does not exist");
      return null; // Return null if the user is not found
    }
  } catch (error) {
    console.error("Error retrieving user data:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

const fetchStore = async (id) => {
  try {
    const response = await axios.get(`https://127.0.0.1:8000/api/stores/${id}`);
    return response.data; // Assuming the store data is in the response's data property
  } catch (error) {
    console.error("Error fetching store data:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export default { checkStore, fetchStore };
