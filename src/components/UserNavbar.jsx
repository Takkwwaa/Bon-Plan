import React from "react";
import { close, Logo, menu, user } from "../assets";
import { useState } from "react";
import Searchbar from "./Searchbar.jsx";

const UserNavbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img
        src={Logo}
        alt="BonPLan"
        className="sm:w-[180px] sm:h-[70px] h-12 w-28 "
      />
      <Searchbar />
      <ul className="list-none sm:flex hidden justify-end items-center text-white ">
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[18px] mr-10 border-none"
          }
        >
          <button>Notifications</button>
        </li>
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[18px] mr-0 border-none flex justify-center items-center flex-row gap-3"
          }
        >
          <button>Profile</button>
          <img
            src={user}
            className=" rounded-full border border-white w-13 h-13 p-1"
          />
        </li>
      </ul>
      <div className="sm:hidden flex  justify-end items-center">
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
            <a href={""}>Contact Us</a>
          </li>
          <li
            className={
              "font-poppins font-normal cursor-pointer text-[16px] text-black mb-4 border-none"
            }
          >
            <button>Login</button>
          </li>
          <li
            className={
              "font-poppins font-normal cursor-pointer text-[16px] text-black mb-0 border-none"
            }
          >
            <button>Sign up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNavbar;
