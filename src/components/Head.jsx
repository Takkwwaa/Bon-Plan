import { Rate, ItemsList } from ".";
import { love, whitebill, yellowbill, redlove, done } from "../assets";
import React, { useState } from "react";

const Head = () => {
  const [loveClick, setLoveClick] = useState(false);
  const [followClick, setFollowClick] = useState(false);

  return (
    <div className=" flex flex-col ">
      <div className="text-white flex flex-row justify-between items-center">
        <h1 className="pb-1 sm:text-4xl text-xl font-arimo text-primary ">
          Store name
        </h1>
        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center gap-2">
            <img
              src={done}
              alt="done"
              className={`${
                followClick ? "block" : "hidden"
              } sm:w-6 sm:h-6 w-4 h-4`}
            />
            <p
              className={`${
                followClick ? " text-[#fefc8e]" : "text-white"
              } text-xl hover:text-[#fefc8e] cursor-pointer `}
              onClick={() => {
                setFollowClick((prev) => !prev);
              }}
            >
              {followClick ? "Followed" : "Follow"}
            </p>
          </div>
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
      <div className="flex items-center pb-5 gap-8">
        <Rate title="Global Rate : " maxRating={5} />
        <p className=" text-[#fefc8e] cursor-pointer text-base ">See more</p>
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
