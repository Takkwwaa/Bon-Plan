import Select from "react-select";
import React, { useState, useEffect } from "react";
import { options, regions } from "../constants";
import DropDownRegions from "./DropDownRegions";

const DropDownLocalisation = () => {
  const [region, setRegion] = useState("");
  const [showregion, setShowRegion] = useState(false);
  const handleSelect = (selectedOption) => {
    setRegion(selectedOption.value);
    setShowRegion(true);
  };

  return (
    <div className="m-0 flex gap-4">
      <div className=" w-[85%] text-white ">
        <Select
          options={options}
          onChange={handleSelect}
          placeholder="City"
          styles={{
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected
                ? "#FF4747"
                : state.isFocused
                ? "#FF6666"
                : "black",
              "&:active": {
                backgroundColor: "#FF4747",
                color: "white",
              },
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "#101010",
              border: "2px solid #FF4747",
              outline: "none",
              boxShadow: "none",
              "&:focus-within": {
                borderColor: "#FF4747",
              },
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: "white",
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: "black",
            }),
            menuList: (provided) => ({
              ...provided,
              maxHeight: 45,
              border: "1px solid #FFFFFF",
            }),
            input: (provided) => ({
              ...provided,
              color: "white",
            }),
          }}
        />
      </div>{" "}
      {showregion && <DropDownRegions city={region} />}
    </div>
  );
};

export default DropDownLocalisation;
