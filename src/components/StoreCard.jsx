import React from "react";
import { useState } from "react";
import { star } from "../assets";
import { items } from "../constants";
import Alert from "./Alert";

const StoreCard = () => {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
    console.log("Alert khedmet");
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          className="bg-gradient-to-b bg-white rounded-md sm:h-72 h-48 sm:w-48 w-28 flex justify-start items-center flex-col sm:pt-4 pt:2"
          key={item.id}
        >
          <div className=" w-5/6 h-32 ">
            <img src={item.logo} className=" w-full h-full object-contain" />
          </div>
          <div className="pt-4 px-4 flex justify-start items-center flex-col ">
            <h1 className="text-primary font-arimo font-semibold sm:text-base text-xs">
              {item.title}
            </h1>
            <div className="font-poppins flex flex-row justify-between items-center sm:text-sm text-xs">
              <p>{item.type}</p>
              <div className="flex p-2">
                <img src={star} alt="" className=" sm:w-4 sm:h-4 w-3 h-3 " />{" "}
                <p className="w-5 h-5">{item.rate}</p>
              </div>
            </div>
            <p
              className=" sm:text-sm text-xs text-[#c9a634] font-poppins cursor-pointer"
              onClick={handleClick}
            >
              See More
            </p>
            {showAlert && <Alert onClose={handleClose} />}
          </div>
        </div>
      ))}
    </>
  );
};

export default StoreCard;
