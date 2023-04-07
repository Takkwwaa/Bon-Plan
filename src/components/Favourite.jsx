import React from "react";
import { leftForward, rightForward } from "../assets";
import styles from "../style.js";
import Items from "./Items.jsx";

const Favourite = () => {
  return (
    <div className={` ${styles.padding2} flex flex-col gap-5`}>
      <h5 className="font-poppins font-meduim ss:text-[24px] text-[16px] text-[#FF4747]">
        Top rated
      </h5>
      <div
        className={`flex justify-between items-center flex-row pt-2 pb-2 border border-primary rounded-lg h-[340px] overflow-hidden ${styles.boxWidth}`}
      >
        <div className=" w-24 h-full flex justify-center items-center hover:cursor-pointer">
          <img src={leftForward} />
        </div>
        <Items />
        <div className=" w-24 h-full  flex justify-center items-center  hover:cursor-pointer">
          {" "}
          <img src={rightForward} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Favourite;
