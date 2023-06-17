import React from "react";
import { leftForward, rightForward } from "../assets";
import styles from "../style.js";
import Items from "./Items.jsx";
import StoreCard from "./StoreCard";
import Photo from "./Photo";

const Galerie = () => {
  return (
    <div className={`${styles.padding2} flex flex-col gap-5 bg-secondary`}>
      <div
        className={`flex justify-between items-center flex-row pt-2 pb-2  border border-primary rounded-lg sm:h-[400px] h-[230px] overflow-x-auto gap-5 ${styles.boxWidth}`}
      >
        <div className=" sm:w-24 w-12 h-full flex justify-center items-center hover:cursor-pointer ">
          <img src={leftForward} className="z-10" />
        </div>
        <Photo />
        <div className=" sm:w-24 w-12 h-full flex justify-center items-center  hover:cursor-pointer ">
          {" "}
          <img
            src={rightForward}
            alt=""
            className="z-10 flex items-center justify-items-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Galerie;
