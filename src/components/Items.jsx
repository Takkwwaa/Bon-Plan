import React from "react";
import { useState } from "react";
import { star } from "../assets";
import { items } from "../constants";
import Alert from "./Alert";
import { Link } from "react-router-dom";

const Items = () => {
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
          className="bg-gradient-to-b bg-white rounded-md h-5/6 w-48 flex justify-start items-center flex-col pt-4"
          key={item.id}
        >
          <Link to={"/profile"}>
            <div className=" w-5/6 h-32 ">
              <img src={item.logo} className=" w-full h-full object-contain" />
            </div>
          </Link>
          <div className="pt-4 px-4 flex justify-start items-center flex-col ">
            <h1 className="text-primary font-arimo font-semibold text-base">
              {item.title}
            </h1>
            <div className="font-poppins flex flex-row justify-between items-center text-sm">
              <p>{item.type}</p>
              <div className="flex p-2">
                <img src={star} alt="" className=" w-5 h-5" />{" "}
                <p className="w-4 h-4">{item.rate}</p>
              </div>
            </div>
            <p
              className=" text-sm text-[#c9a634] font-poppins cursor-pointer"
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

export default Items;
