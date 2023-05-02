import { useState } from "react";

function Rating({ maxRating = 5 }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const ratingIcons = [];

  for (let i = 1; i <= maxRating; i++) {
    const isFilled = i <= rating;
    ratingIcons.push(
      <span
        key={i}
        className={`text-xl sm:text-2xl text-gray-400 ${
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
      <span className="sm:text-xl text-base md:mr-2 text-white">Rate :</span>
      <div className="flex justify-center">{ratingIcons}</div>
    </div>
  );
}

export default Rating;
