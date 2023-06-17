import React, { useState } from "react";
import { categories } from "../constants";
import Select from "react-select";

export default function DropDownCategory({}) {
  const [category, setCategory] = useState("");

  const options = categories;
  console.log("categories table :", options);
  const handleSelect = (selectedOption) => {
    setCategory(selectedOption.value);
  };
  console.log("from dropdownRegion", category);
  return (
    <div className=" w-[85%] text-white">
      <Select
        options={options}
        placeholder="Category"
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
