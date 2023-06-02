import styles from "../style";
import { ItemsList, UserInfoUpdate, UserNavbar } from "../components";
import { User } from "../assets";
import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

const UserProfile = () => {
  const [showForum, setShowForum] = useState(false);
  const { user, setUser } = useContext(UserContext);
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
          <img
            src={User}
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
            {" "}
            Tunis, Manouba 33 avenue Agereb{" "}
          </p>

          <h5 className="pb-1 m:text-lg text-base font-arimo text-primary ">
            Gender
          </h5>
          <p className="pb-3 sm:text-sm text-xs">Female</p>

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
