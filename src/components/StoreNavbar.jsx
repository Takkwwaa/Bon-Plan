import React, { useState, useContext } from "react";
import { Logo, User, notification, home } from "../assets";
import Searchbar from "./Searchbar.jsx";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "../axios";

const StoreNavbar = (props) => {
  const [toggle, setToggle] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const [imageUrl, setImageUrl] = useState(User);
  axios
    .get(`api/pictures/${user?.avatar?.id}`)
    .then((response) => {
      // Handle the response data
      console.log(response.data?.imageName);
      const data =
        "https://127.0.0.1:8000/images/picture/" + response.data?.imageName;
      console.log(response.data?.imageName);
      setImageUrl(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
  return (
    <nav className="w-full bg-secondary flex py-6 justify-between items-center navbar ">
      <img
        src={Logo}
        alt="BonPLan"
        className="sm:w-[180px] sm:h-[70px] h-8 w-24 "
      />
      <ul className="list-none sm:flex hidden justify-end items-center text-white ">
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[16px] mr-0 border-none flex justify-center items-center flex-row gap-2"
          }
        >
          <img
            src={User}
            className=" rounded-full border border-white w-12 h-12 p-1"
            onClick={() => setToggle((prev) => !prev)}
          />
          {toggle ? (
            <div
              className={`flex p-2 pl-4 bg-black border border-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-center items-start flex-1 flex-col">
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
        <li
          className={
            "font-poppins font-normal cursor-pointer text-[16px] text-black  border-none"
          }
        >
          <img
            src={imageUrl}
            className=" rounded-full border border-white w-10 h-10 p-1"
            onClick={() => setToggle((prev) => !prev)}
          />
          {toggle ? (
            <div
              className={`flex p-2 pl-4 bg-black border border-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-center items-start flex-1 flex-col">
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
    </nav>
  );
};

export default StoreNavbar;
