import React from "react";
import { Logo, user, notification, home } from "../assets";

import Searchbar from "./Searchbar.jsx";
import { Link } from "react-router-dom";

const UserNavbar = (props) => {
  return (
    <nav className="w-full bg-secondary flex py-6 justify-between items-center navbar ">
      <img
        src={Logo}
        alt="BonPLan"
        className="sm:w-[180px] sm:h-[70px] h-12 w-28 "
      />
      <Searchbar />
      <ul className="list-none sm:flex hidden justify-end items-center text-white ">
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[16px] mr-10 border-none flex justify-center items-center flex-row gap-2"
          }
        >
          <button>
            <img src={notification} className="rounded-full w-6 h-6" />
          </button>
        </li>
        <li
          className={
            props.showhome === "true"
              ? `font-poppins font-normal cursor-pointer text-[16px] mr-10 border-none flex justify-center items-center flex-row gap-2`
              : `hidden `
          }
        >
          <img src={home} alt="home" className="rounded-full w-8 h-8" />
        </li>
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[16px] mr-0 border-none flex justify-center items-center flex-row gap-2"
          }
        >
          <Link to="/profile">
            <img
              src={user}
              className=" rounded-full border border-white w-12 h-12 p-1"
            />
          </Link>
        </li>
      </ul>
      <ul className="list-none sm:hidden flex justify-center items-center text-white gap-3">
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[16px] text-black"
          }
        >
          <button>
            {" "}
            <img src={notification} className="rounded-full w-7 h-7 " />
          </button>
        </li>
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[16px] text-black  border-none"
          }
        >
          <Link to="/profile">
            <img
              src={user}
              className=" rounded-full border border-white w-10 h-10 p-1"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavbar;
