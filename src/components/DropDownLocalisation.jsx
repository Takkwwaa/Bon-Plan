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
    <>
      <div className=" w-1/2 text-white">
        <Select
          options={options}
          onChange={handleSelect}
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
            input: (provided) => ({
              ...provided,
              color: "white",
            }),
          }}
        />
      </div>{" "}
      {showregion && <DropDownRegions city={region} />}
    </>
  );
};

export default DropDownLocalisation;
