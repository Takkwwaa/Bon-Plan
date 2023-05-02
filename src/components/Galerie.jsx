import React from "react";
import { leftForward, rightForward } from "../assets";
import styles from "../style.js";
import Items from "./Items.jsx";
import StoreCard from "./StoreCard";
import Photo from "./Photo";

const ItemsList = () => {
  return (
    <div className={` ${styles.padding2} flex flex-col gap-5 bg-secondary`}>
      <div
        className={`flex justify-between items-center flex-row pt-2 pb-2 border border-primary rounded-lg sm:h-[300px] h-[170px] overflow-hidden ${styles.boxWidth}`}
      >
        <div className=" sm:w-24 w-12 h-full flex justify-center items-center hover:cursor-pointer ">
          <img src={leftForward} className="z-10" />
        </div>
        <Photo />
        <div className=" sm:w-24 w-12 h-full  flex justify-center items-center  hover:cursor-pointer ">
          {" "}
          <img src={rightForward} alt="" className="z-10" />
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
