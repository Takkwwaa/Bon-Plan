import React from "react";
import { close, Logo, menu } from "../assets";
import { useState } from "react";
import Searchbar from "./Searchbar.jsx";
import ConnectPopup from "./ConnectPopup.jsx";
import Alert from "./Alert";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [title, setTitle] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleConnectClick = (key) => {
    setShowPopup(true);
    setTitle(key);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleClick = () => {
    setShowAlert(true);
    console.log("Alert khedmet");
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img
        src={Logo}
        alt="BonPLan"
        className="sm:w-[180px] sm:h-[70px] h-12 w-28 "
      />
      <Searchbar onClick={handleClick} />
      {showAlert && <Alert onClose={handleClose} />}
      <ul className="list-none sm:flex hidden justify-end items-center text-white ">
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[18px] mr-10 "
          }
        >
          <a href={"#contact"}>Contact Us</a>
        </li>
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[18px] mr-10 border-none"
          }
        >
          <button
            onClick={() => {
              handleConnectClick("Connect As");
            }}
          >
            Login
          </button>
          {showPopup && (
            <ConnectPopup onClose={handleClosePopup} title={title} />
          )}
        </li>
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[18px] mr-0 border-none"
          }
        >
          <button
            onClick={() => {
              handleConnectClick("Create a New");
            }}
          >
            Sign up
          </button>
          {showPopup && (
            <ConnectPopup onClose={handleClosePopup} title={title} />
          )}
        </li>
      </ul>
      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[26px] h-[26px] object-contain mr-10 "
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-gradient-to-b from-[#787878] to-transparent  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          <li
            className={
              "font-poppins font-normal cursor-pointer text-[16px] text-black mb-4"
            }
          >
            <a href={"#contact"}>Contact Us</a>
          </li>
          <li
            className={
              "font-poppins font-normal cursor-pointer text-[16px] text-black mb-4 border-none"
            }
          >
            <button
              onClick={() => {
                handleConnectClick("Connect As");
              }}
            >
              Login
            </button>
            {showPopup && (
              <ConnectPopup onClose={handleClosePopup} title={title} />
            )}
          </li>
          <li
            className={
              "font-poppins font-normal cursor-pointer text-[16px] text-black mb-0 border-none"
            }
          >
            <button
              onClick={() => {
                handleConnectClick("Create a New");
              }}
            >
              Sign up
            </button>
            {showPopup && (
              <ConnectPopup onClose={handleClosePopup} title={title} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
