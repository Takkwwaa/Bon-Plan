import React from "react";
import { regions } from "../constants";
import Select from "react-select";

export default function DropDownRegions(city) {
  console.log(typeof city);
  console.log(city.city);
  var arr = regions.find(({ value }) => value === city.city);
  console.log(regions.find((value) => value === city));
  const options = arr.table[city.city];
  console.log("region table :", options);
  return (
    <div className=" w-[85%] text-white">
      <Select
        options={options}
        placeholder="Region"
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
