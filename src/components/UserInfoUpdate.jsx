import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { store, userr, close } from "../assets";
import DropDownLocalisation from "./DropDownLocalisation";
import axios from "../axios";
import jwtDecode from "jwt-decode";
import FileUploader from "./FileUploader";
import { UserContext } from "../UserContext";

const UserInfoUpdate = (props) => {
  const [genderr, setGender] = useState("");
  const [username, setUsername] = useState(""); // State to store the username
  const [selectedLocalisation, setSelectedLocalisation] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState({});
  const { user, setUser } = useContext(UserContext);

  const handleFile = (file) => {
    // Handle the file in the parent component
    console.log("File uploaded:", file);
    setFile(file);
  };

  const handleLocalisationChange = (selectedLocalisation) => {
    setSelectedLocalisation(selectedLocalisation);
    console.log("from update city : ", selectedLocalisation);
  };

  const handleRegionChange = (selectedRegion) => {
    setSelectedRegion(selectedRegion);
    console.log("from update region : ", selectedRegion);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {};

    if (username !== "") {
      data.userName = username;
    }

    if (genderr !== "") {
      data.gender = genderr;
    }
    let localisation = {};

    if (selectedRegion !== "") {
      localisation.region = selectedRegion;
    }

    if (selectedLocalisation !== "") {
      localisation.city = selectedLocalisation.label;
    }

    console.log(data);
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const t = token;
      const id = jwtDecode(t).id;

      const response = await axios.patch(`/api/users/${id}`, data, {
        headers: {
          "Content-Type": "application/merge-patch+json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await axios.patch(props.loc, localisation, {
        headers: {
          "Content-Type": "application/merge-patch+json",
          Authorization: `Bearer ${token}`,
        },
      });
      const formData = new FormData();
      console.log("File  shih:", file);
      formData.append("imageFile", file); // Assuming 'file' is the input field name in your form

      // Make a POST request to send data
      axios
        .patch(`api/pictures/${user?.avatar?.id}`, formData)
        .then((response) => {
          // Handle the response data
          const data = response.data;
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });

      if (response.status === 200) {
        console.log("User updated successfully");
        setSuccess(true);
      } else {
        console.error("Failed to update user");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      await handleSubmit(event); // Await the promise returned by handleSubmit

      // Perform any additional actions upon successful form submission
    } catch (error) {
      // Handle the error case
    }
  };

  const handleCloseClick = () => {
    props.onClose();
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-start mt-[10%] justify-center m-4">
      <div className="fixed inset-0 bg-white opacity-5 "></div>
      <div className="bg-black border-2 border-white sm:p-8 p-4 rounded-lg z-10 sm:w-[25%] w-[95%] ">
        <div className="flex justify-end">
          <img
            src={close}
            alt="close"
            className="cursor-pointer m-0 "
            onClick={handleCloseClick}
          />
        </div>
        <form
          action=""
          className="flex flex-col pl-4 font-poppins text-black "
          onSubmit={handleFormSubmit}
        >
          <h5 className="py-3 sm:text-lg text-base font-arimo text-primary ">
            Address
          </h5>
          <DropDownLocalisation
            onChange={handleLocalisationChange}
            onRegionChange={handleRegionChange}
          />
          <h5 className="py-3 m:text-lg text-base font-arimo text-primary ">
            Gender
          </h5>
          <div className="flex justify-start items-start">
            {/* <!--First radio--> */}
            <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="M"
                checked={genderr === "M"}
                onChange={handleGenderChange}
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-white"
                htmlFor="inlineRadio1"
              >
                Male
              </label>
            </div>

            {/* <!--Second radio--> */}
            <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                checked={genderr === "F"}
                value="F"
                onChange={handleGenderChange}
              />
              <label
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-white"
                htmlFor="inlineRadio2"
              >
                Female
              </label>
            </div>
          </div>
          <h5 className="py-3 m:text-lg text-base font-arimo text-primary ">
            User Name
          </h5>
          <input
            type="text"
            className=" text-white pl-1 text-sm block min-h-[auto] w-full outline-primary outline-1 outline rounded border-0 bg-secondary py-[0.32rem] leading-[1.6] outline-none "
            id="username"
            placeholder="Amino.."
            onChange={handleUsernameChange}
            // {...register("lastname")}
            autoComplete="off"
          />{" "}
          <div className="py-3">
            <FileUploader handleFile={handleFile} />
          </div>
          <div className="flex justify-end flex-row mt-5 items-center">
            {success ? (
              <p className="flex-1 justify-center  align-middle pl-[0.15rem] hover:cursor-pointer text-[#41ad49]">
                Success !
              </p>
            ) : null}
            <button
              className=" p-1 px-2 text-sm text-primary border border-primary rounded-md w-auto h-9 "
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default UserInfoUpdate;
