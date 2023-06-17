import React, { useEffect, useRef, useState } from "react";
import { close, menu } from "../assets";
import useMediaQuery from "../hooks/useMediaQuery";
import DropDownLocalisation from "./DropDownLocalisation";
import DropDownCategory from "./DropDownCategory";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const ref = useRef();
  const [showsidebar, setShowSideBar] = useState(false);
  const [selectedLocalisation, setSelectedLocalisation] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const handleLocalisationChange = (selectedLocalisation) => {
    setSelectedLocalisation(selectedLocalisation);
    console.log("from update city : ", selectedLocalisation);
  };

  const handleRegionChange = (selectedRegion) => {
    setSelectedRegion(selectedRegion);
    console.log("from update region : ", selectedRegion);
  };
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
    <div className=" relative h-screen sm:w-full w-0">
      <button
        className=" bg-primary text-white p-2 rounded-tr-lg rounded-br-lg w-[30px] text-lg top-[5%] absolute z-50 block sm:hidden"
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
        } bg-[#101010] transition-all duration-300 pt-20 flex flex-col items-center justify-start gap-6 absolute w-[50vw] sm:w-[100%] h-[100%] top-0 left-[0%] border-r-[1px] border-white `}
      >
        <h1 className=" font-dance text-5xl flex align-middle justify-center text-white ss:leading-[100.8px] leading-[75px]">
          Filter
        </h1>
        <div className=" p-3 border border-primary rounded-md w-[85%] m-0 pb-14">
          <h5 className="font-arimo text-lg text-white pb-3 ">Location :</h5>
          <DropDownLocalisation
            onChange={handleLocalisationChange}
            onRegionChange={handleRegionChange}
          />
        </div>
        <div className=" p-3 border border-primary rounded-md w-[85%] m-0 pb-14">
          <h5 className="font-arimo text-lg text-white pb-3 ">Categories :</h5>
          <DropDownCategory />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
