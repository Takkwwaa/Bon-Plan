import styles from "../style";
import {
  Galerie,
  ItemsList,
  StoreCard,
  StoreNavbar,
  UserInfoUpdate,
  UserNavbar,
} from "../components";
import { User, add, crepefactory } from "../assets";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import profile from "../profile";
import axios from "../axios";
import StoreInfoUpdate from "../components/StoreInfoUpdate";

const StoreProfile = () => {
  const [showForum, setShowForum] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [localisation, setLocalisation] = useState(false);
  const [imageUrl, setImageUrl] = useState(User);
  useEffect(() => {
    const fetchlocalisationn = async (loc) => {
      const response = await axios.get(loc);
      return response.data;
    };
    const fetchlocalisation = async () => {
      try {
        const loc = await fetchlocalisationn(user?.localisation);
        setLocalisation(loc);
        console.log(user);
        console.log(loc);
      } catch (error) {
        console.error(error);
      }
    };
    // const fetchImage = async () => {
    //   try {
    //     const response = await fetch(user?.avatar, {
    //       method: "GET",
    //       headers: {
    //         Accept: "image/jpeg, image/png, image/jpg",
    //       },
    //     });

    //     if (response.ok) {
    //       const blobData = await response.blob();
    //       const imageUrl = URL.createObjectURL(blobData);
    //       setImageUrl(imageUrl);
    //     } else {
    //       throw new Error("Image file not found");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };

    // fetchImage();
    fetchlocalisation();
  }, [user]);
  const handleButton = () => {
    setShowForum(true);
  };

  const handleClose = () => {
    setShowForum(false);
  };
  console.log(user);
  return (
    <div className=" w-screen bg-[#101010] h-screen overflow-x-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-secondary `}>
        <div className={`w-full `}>
          <StoreNavbar showhome="true" />
        </div>
      </div>
      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}flex-row  `}
      >
        <div className=" flex items-center justify-center w-[40%] ">
          {}
          <img
            src={crepefactory}
            className=" rounded-full border border-white sm:w-40 sm:h-40 w-20 h-20 p-1"
          />
        </div>
        <div className=" w-[1px] bg-white flex flex-col h-auto "></div>
        <div
          className=" 
          w-[60%] pl-4 font-poppins text-white "
        >
          <h5 className="pb-1 sm:text-lg text-base font-arimo text-primary ">
            Address
          </h5>
          <p className="pb-3 sm:text-sm text-xs">
            {localisation.city == ""
              ? "localisation not set yet"
              : localisation.city + ", " + localisation.region}{" "}
            <br />
            {localisation.adressLine == "" ? null : localisation.adressLine}
          </p>

          <h5 className="pb-1 m:text-lg text-base font-arimo text-primary ">
            Name
          </h5>
          <p className="pb-3 sm:text-sm text-xs text-white">
            {" "}
            {user ? user.name : "d*hbcehj"}
          </p>

          <h5 className="pb-1 m:text-lg text-base font-arimo text-primary ">
            Phone
          </h5>
          <p className="pb-3 sm:text-sm text-xs text-white">
            {" "}
            {user ? user.phone : "d*hbcehj"}
          </p>
          <div className="sm:w-[200px] w-full">
            <h5 className="pb-1 m:text-lg text-base font-arimo text-primary ">
              description
            </h5>
          </div>
          <p className="pb-3 sm:text-sm text-xs text-white">
            {" "}
            {user ? user.description : "d*hbcehj"}
          </p>

          <div className="flex justify-center">
            <button
              className="p-1 px-2 text-sm text-primary border border-primary rounded-md w-auto h-9 "
              onClick={handleButton}
            >
              Update
            </button>
            {showForum && (
              <StoreInfoUpdate onClose={handleClose} loc={user?.localisation} />
            )}
          </div>
        </div>
      </div>
      <div className={` ${styles.padding2} flex flex-col gap-5 bg-secondary`}>
        <div
          className={` ${styles.padding2} flex justify-start gap-4 items-center`}
        >
          <h5 className="font-poppins font-meduim ss:text-[30px] text-[22px] text-[#FF4747]">
            Gallery
          </h5>
          <img src={add} className=" w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <Galerie />
      </div>
    </div>
  );
};

export default StoreProfile;
