import React, { useEffect, useRef, useState } from "react";
import { close, menu } from "../assets";
import useMediaQuery from "../hooks/useMediaQuery";
import DropDownLocalisation from "./DropDownLocalisation";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [regions, setRegions] = useState("");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ref = useRef();
  const [showsidebar, setShowSideBar] = useState(false);
  const handleClick = () => {
    setShowSideBar((s) => !s);
    setToggle((s) => !s);
    if (!isDesktop) {
      if (ref.current.classList.contains("hide-navbar")) {
        closeSideBar();
      } else {
        openSideBar();
      }
    }
  };
  useEffect(() => {
    if (isDesktop) {
      ref.current.classList.remove("hide-navbar");
      ref.current.classList.remove("show-navbar");
    }
  }, [isDesktop]);

  return (
    <div className=" relative h-screen w-full  ">
      <button
        className=" bg-primary text-white p-4 rounded-tr-lg rounded-br-lg w-[50px] text-lg top-[5%] absolute z-10 block sm:hidden"
        onClick={handleClick}
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        />
      </button>
      <div
        className={`${
          showsidebar ? "block" : "hidden"
        } bg-[rgba(0,0,0,0.28)] fixed top-0 bottom-0 w-screen h-screen z-[5]  sm:hidden transition-all duration-200 `}
      ></div>
      <div
        ref={ref}
        className={` z-[8] sm:animate-none sm:translate-x-[0] translate-x-[-100%] ${
          showsidebar && "translate-x-[0]"
        } bg-[#101010] transition-all duration-300	 flex flex-col items-center justify-center gap-24 absolute w-[50vw] sm:w-[100%] h-[100%] top-0 left-[0%] border-r-[1px] border-white `}
      >
        <h1 className=" font-arimo font-semibold text-2xl flex align-middle justify-center py-6 text-white tracking-widest ">
          Filter
        </h1>
        <DropDownLocalisation />
      </div>
    </div>
  );
};

export default Sidebar;
