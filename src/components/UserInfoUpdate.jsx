import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { store, userr, close } from "../assets";
import DropDownLocalisation from "./DropDownLocalisation";

const UserInfoUpdate = (props) => {
  const [target, setTarget] = useState("");

  const handleUserClick = () => {
    console.log({ target });
  };

  const handleStoreClick = () => {
    console.log({ target });
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
        <form action="" className="flex flex-col pl-4 font-poppins text-black ">
          <h5 className="py-3 sm:text-lg text-base font-arimo text-primary ">
            Address
          </h5>
          <DropDownLocalisation />
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
                value="option1"
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
                value="option2"
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
            // {...register("lastname")}
            autoComplete="off"
          />{" "}
          <div className="flex justify-end mt-5">
            <button
              className="p-1 px-2 text-sm text-primary border border-primary rounded-md w-auto h-9 "
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
