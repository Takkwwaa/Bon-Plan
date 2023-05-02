import { useState } from "react";

const Rating = (props) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const ratingIcons = [];

  for (let i = 1; i <= props.maxRating; i++) {
    const isFilled = i <= rating;
    ratingIcons.push(
      <span
        key={i}
        className={`text-xl sm:text-2xl text-gray-400 cursor-pointer ${
          isFilled ? "text-yellow-400" : ""
        }`}
        onClick={() => handleRatingChange(i)}
      >
        ★
      </span>
    );
  }

  return (
    <div className="flex flex-row sm:items-center space-y-0 ">
      <span
        className={`${
          props.title === "Global Rate : "
            ? "sm:text-xl text-base"
            : " sm:text-sm text-xs"
        } md:mr-2 text-white`}
      >
        {props.title}
      </span>
      <div className="flex justify-center">{ratingIcons}</div>
    </div>
  );
};

export default Rating;
