import React, { useState } from "react";
import { Logo, user, notification, home } from "../assets";

import Searchbar from "./Searchbar.jsx";
import { Link } from "react-router-dom";

const UserNavbar = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full bg-secondary flex py-6 justify-between items-center navbar ">
      <img
        src={Logo}
        alt="BonPLan"
        className="sm:w-[180px] sm:h-[70px] h-8 w-24 "
      />
      <Searchbar />
      <ul className="list-none sm:flex hidden justify-end items-center text-white ">
        <div className="flex items-baseline justify-center ">
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
            <Link to={"/"}>
              <img src={home} alt="home" className="rounded-full w-8 h-8" />
            </Link>
          </li>
        </div>
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[16px] mr-0 border-none flex justify-center items-center flex-row gap-2"
          }
        >
          <img
            src={user}
            className=" rounded-full border border-white w-12 h-12 p-1"
            onClick={() => setToggle((prev) => !prev)}
          />
          {toggle ? (
            <div
              className={`flex p-2 pl-4 bg-black border border-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-center items-start flex-1 flex-col">
                <Link to="/profile/:id">
                  <li
                    className={
                      "flex flex-1 font-poppins font-normal cursor-pointer text-[16px] text-white mb-4 mt-2 hover:text-primary"
                    }
                  >
                    Profile
                  </li>
                </Link>
                <Link to="/Logout">
                  <li
                    className={
                      "font-poppins font-normal cursor-pointer text-[16px] text-white mb-2 hover:text-primary"
                    }
                  >
                    Logout
                  </li>
                </Link>
              </ul>
            </div>
          ) : null}
        </li>
      </ul>
      <ul className="list-none sm:hidden flex justify-center items-center text-white gap-2">
        <div className="flex items-baseline justify-center gap-2">
          <li
            className={
              "font-poppins font-normal cursor-pointer text-[16px] text-black"
            }
          >
            <button>
              {" "}
              <img src={notification} className="rounded-full w-5 h-5 " />
            </button>
          </li>
          <li className={props.showhome === "true" ? `block` : `hidden `}>
            <Link to={"/"}>
              <img src={home} alt="home" className="rounded-full w-6 h-6" />
            </Link>
          </li>
        </div>
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
