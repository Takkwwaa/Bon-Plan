import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { store, userr, close } from "../assets";
import DropDownLocalisation from "./DropDownLocalisation";
import axios from "../axios";
import jwtDecode from "jwt-decode";
import FileUploader from "./FileUploader";
import { UserContext } from "../UserContext";

const StoreInfoUpdate = (props) => {
  const [genderr, setGender] = useState("");
  const [name, setName] = useState(""); // State to store the username
  const [selectedLocalisation, setSelectedLocalisation] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
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
  const handleLocalisationdescription = (event) => {
    setAddress(event.target.value);
    console.log("from update address : ", address);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log("from update description : ", description);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    console.log("from update Phone : ", phone);
  };

  const handleRegionChange = (selectedRegion) => {
    setSelectedRegion(selectedRegion);
    console.log("from update region : ", selectedRegion);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {};

    if (name !== "") {
      data.name = name;
    }

    if (phone !== "") {
      data.phone = phone;
    }
    if (description !== "") {
      data.description = description;
    }
    let localisation = {};

    if (selectedRegion !== "") {
      localisation.region = selectedRegion;
    }

    if (selectedLocalisation !== "") {
      localisation.city = selectedLocalisation.label;
    }
    if (address !== "") {
      localisation.adressLine = address;
    }

    console.log(data);
    try {
      const token = localStorage.getItem("token");
      console.log(token);

      const response = await axios.patch(`/api/stores/${token}`, data, {
        headers: {
          "Content-Type": "application/merge-patch+json",
        },
      });
      const res = await axios.patch(props.loc, localisation, {
        headers: {
          "Content-Type": "application/merge-patch+json",
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
          <input
            type="text"
            className=" mt-2 text-white pl-1 text-sm block min-h-[auto] w-full outline-primary outline-1 outline rounded border-0 bg-secondary py-[0.32rem] leading-[1.6] outline-none "
            id="address"
            placeholder="Address"
            onChange={handleLocalisationdescription}
            autoComplete="off"
          />{" "}
          <h5 className="py-3 m:text-lg text-base font-arimo text-primary ">
            Store Name
          </h5>
          <input
            type="text"
            className=" text-white pl-1 text-sm block min-h-[auto] w-full outline-primary outline-1 outline rounded border-0 bg-secondary py-[0.32rem] leading-[1.6] outline-none "
            placeholder="Phone"
            onChange={handleNameChange}
            autoComplete="off"
          />{" "}
          <h5 className="py-3 m:text-lg text-base font-arimo text-primary ">
            Phone
          </h5>
          <input
            type="text"
            className=" text-white pl-1 text-sm block min-h-[auto] w-full outline-primary outline-1 outline rounded border-0 bg-secondary py-[0.32rem] leading-[1.6] outline-none "
            id="Store Name"
            placeholder="Store Name"
            onChange={handlePhoneChange}
            autoComplete="off"
          />{" "}
          <h5 className="py-3 m:text-lg text-base font-arimo text-primary ">
            Description
          </h5>
          <textarea
            type="text"
            className=" text-white pl-1 text-sm block min-h-[auto] w-full outline-primary outline-1 outline rounded border-0 bg-secondary py-[0.32rem] leading-[1.6] outline-none "
            placeholder="Description"
            onChange={handleDescriptionChange}
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

export default StoreInfoUpdate;
