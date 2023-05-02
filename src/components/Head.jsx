import { Rate, ItemsList } from ".";
import { love, whitebill, yellowbill, redlove } from "../assets";
import React, { useState } from "react";

const Head = () => {
  const [loveClick, setLoveClick] = useState(false);
  const [billClick, setBillClick] = useState(false);
  return (
    <div className=" flex flex-col ">
      <div className="text-white flex flex-row justify-between items-center">
        <h1 className="pb-1 sm:text-4xl text-xl font-arimo text-primary ">
          Store name
        </h1>
        <div className="flex justify-center items-center gap-6">
          <img
            src={billClick ? yellowbill : whitebill}
            alt="bill"
            className="sm:w-6 sm:h-6 h-4 w-4 "
            onClick={() => {
              setBillClick((prev) => !prev);
            }}
          />

          <img
            src={loveClick ? redlove : love}
            alt="love"
            className={` sm:w-8 sm:h-8 w-6 h-6`}
            onClick={() => {
              setLoveClick((prev) => !prev);
            }}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 pb-5">
        <Rate />
      </div>
      <div className=" sm:w-1/2 w-full">
        <p className=" text-poppins sm:text-lg text-base text-white ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, odit.
          Rerum explicabo quas impedit. Ipsa provident, ipsum numquam
          praesentium nulla quia corrupti dignissimos iste, iure voluptatibus
          cumque tempore nostrum labore.
        </p>
      </div>
    </div>
  );
};

export default Head;
