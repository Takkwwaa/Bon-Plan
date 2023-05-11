import { star } from "../assets";
import Alert from "./Alert";
import { useState } from "react";

const Card = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    setShowAlert(true);
    console.log("Alert khedmet");
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div
      className=" bg-white rounded-md h-full w-[200px] flex justify-start items-center flex-col sm:p-4 p-2 z-10"
      key={props.item.id}
    >
      <img
        src={props.item.logo}
        className=" w-[180px] object-contain h-[144px] "
      />

      <div className="pt-4 px-4 flex justify-start items-center flex-col ">
        <h1 className="text-primary font-arimo font-semibold  text-xs">
          {props.item.title}
        </h1>
        <div className="font-poppins flex flex-row justify-between items-center sm:text-sm text-xs">
          <p>{props.item.type}</p>
          <div className="flex p-2">
            <img src={star} alt="" className=" sm:w-4 sm:h-4 w-3 h-3 " />{" "}
            <p className="w-5 h-5">{props.item.rate}</p>
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
  );
};

export default Card;
