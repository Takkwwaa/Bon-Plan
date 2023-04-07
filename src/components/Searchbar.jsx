import React from "react";
import { useState } from "react";

function Searchbar(props) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const Boom = false;
  return (
    <>
      <input
        type="text"
        className=" w-[20%] sm:w-[200px] sm:pl-4 sm:border-2 border-[1px] border-solid bg-transparent rounded-lg p-1 pl-1 outline-none placeholder-gray-300 text-white border-white sm:text-lg text-sm "
        placeholder="Search..."
        onChange={handleChange}
        value={searchInput}
      />
      <input
        type="text"
        className={`${
          Boom ? "flex" : "hidden"
        }  w-[20%] sm:w-[200px] sm:pl-4 sm:border-2 border-[1px] border-solid bg-transparent rounded-lg p-1 pl-1 outline-none placeholder-gray-300 text-white border-white sm:text-lg text-sm `}
        placeholder="Search..."
        onChange={handleChange}
        value={searchInput}
        onClick={props.onClick}
        readOnly
      />
    </>
  );
}

export default Searchbar;
