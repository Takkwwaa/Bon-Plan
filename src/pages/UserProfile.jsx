import styles from "../style";
import { ItemsList, UserInfoUpdate, UserNavbar } from "../components";
import { User } from "../assets";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import profile from "../profile";

const UserProfile = () => {
  const [showForum, setShowForum] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [localisation, setLocalisation] = useState(false);
  const [imageUrl, setImageUrl] = useState(User);
  useEffect(() => {
    const fetchlocalisation = async () => {
      try {
        const loc = await profile.fetchlocalisation(user?.localisation);
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
          <UserNavbar showhome="true" />
        </div>
      </div>
      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}flex-row  `}
      >
        <div className=" flex items-center justify-center w-[40%] ">
          {}
          <img
            src={imageUrl}
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
          </p>

          <h5 className="pb-1 m:text-lg text-base font-arimo text-primary ">
            Gender
          </h5>
          <p className="pb-3 sm:text-sm text-xs">
            {user?.gender == ""
              ? "gender not set yet"
              : user?.gender == "M"
              ? "Male"
              : "Female"}
          </p>

          <h5 className="pb-1 m:text-lg text-base font-arimo text-primary ">
            User Name
          </h5>
          <p className="pb-3 sm:text-sm text-xs text-white">
            {" "}
            {user ? user.userName : "d*hbcehj"}
          </p>

          <div className="flex justify-center">
            <button
              className="p-1 px-2 text-sm text-primary border border-primary rounded-md w-auto h-9 "
              onClick={handleButton}
            >
              Update
            </button>
            {showForum && <UserInfoUpdate onClose={handleClose} />}
          </div>
        </div>
      </div>
      <ItemsList />
    </div>
  );
};

export default UserProfile;
