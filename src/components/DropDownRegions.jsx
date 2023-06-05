import React, { useState } from "react";
import { regions } from "../constants";
import Select from "react-select";

export default function DropDownRegions({ city, onChange }) {
  const [region, setRegion] = useState("");
  console.log(typeof city);
  console.log(city);
  var arr = regions.find(({ value }) => value === city);
  console.log(regions.find((value) => value === city));
  const options = arr.table[city];
  console.log("region table :", options);
  const handleSelect = (selectedOption) => {
    setRegion(selectedOption.value);
    onChange(selectedOption.value);
  };
  console.log("from dropdownRegion", region);
  return (
    <div className=" w-[85%] text-white">
      <Select
        options={options}
        placeholder="Region"
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
          menuList: (provided) => ({
            ...provided,
            maxHeight: 45,
            border: "1px solid #FFFFFF",
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
    </div>
  );
}
