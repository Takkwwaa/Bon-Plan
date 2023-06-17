import { Rate, ItemsList } from ".";
import {
  love,
  whitebill,
  yellowbill,
  redlove,
  done,
  thumb_up_colored,
  thumb_up,
  thumb_down_colored,
  thumb_down,
} from "../assets";

import React, { useState } from "react";

const Head = () => {
  const [loveClick, setLoveClick] = useState(false);
  const [dislikeClick, setDislikeClick] = useState(false);
  const [followClick, setFollowClick] = useState(false);

  return (
    <div className=" flex flex-col ">
      <div className="text-white flex flex-row justify-between items-center">
        <h1 className="pb-1 sm:text-4xl text-xl font-arimo text-primary ">
          Crêpe Factory
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
            src={loveClick ? thumb_up_colored : thumb_up}
            alt="love"
            className={` sm:w-8 sm:h-8 w-6 h-6`}
            onClick={() => {
              setLoveClick((prev) => !prev);
            }}
          />
          <img
            src={dislikeClick ? thumb_down_colored : thumb_down}
            alt="love"
            className={` sm:w-8 sm:h-8 w-6 h-6`}
            onClick={() => {
              setDislikeClick((prev) => !prev);
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
          Our crepe store is a culinary haven where thin, delectable crepes are
          crafted with passion. Indulge in a symphony of flavors with our sweet
          and savory creations, made fresh for your enjoyment. Experience the
          essence of French cuisine in every bite, served with warm hospitality.
        </p>
      </div>
    </div>
  );
};

export default Head;
