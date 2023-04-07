import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { store, userr, closeblack } from "../assets";
import { Link } from "react-router-dom";

function ConnectPopup(props) {
  const [target, setTarget] = useState("");

  const handleUserClick = () => {
    props.title === "Connect As" ? setTarget("/Login") : setTarget("/Signup");
    console.log({ target });
  };

  const handleStoreClick = () => {
    props.title === "Connect As"
      ? setTarget("/store/Login")
      : setTarget("/store/Signup");
    console.log({ target });
  };

  const handleCloseClick = () => {
    props.onClose();
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center m-4">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="bg-white sm:p-8 p-4 rounded-lg z-10 ">
        <div className="flex justify-end">
          <img
            src={closeblack}
            alt="close"
            className="cursor-pointer m-0 "
            onClick={handleCloseClick}
          />
        </div>
        <h2 className="text-lg mb-4 font-poppins flex justify-center text-primary">
          {props.title}
        </h2>
        <div className="flex flex-row justify-between items-center  ">
          <Link to={target} onClick={handleStoreClick}>
            <div className=" flex items-center justify-center m-4 flex-col border-[1px] bg-gray-100 rounded-md hover:border-primary hover:border-2 sm:w-48 sm:h-56 w-24 h-28 cursor-pointer">
              <img
                src={store}
                alt="store logo"
                className=" sm:w-20 sm:h-20 w-10 h-10"
              />
              <p className="font-poppins text-sm pt-4">Store</p>
            </div>
          </Link>
          <Link to={target} onClick={handleUserClick}>
            <div className=" flex items-center justify-center m-6 flex-col border-[1px] bg-gray-100 rounded-md hover:border-primary hover:border-2 sm:w-48 sm:h-56 w-24 h-28 cursor-pointer">
              <img
                src={userr}
                alt="user logo"
                className="sm:w-20 sm:h-20 w-10 h-10"
              />
              <p className="font-poppins text-sm pt-4">User</p>
            </div>
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default ConnectPopup;
