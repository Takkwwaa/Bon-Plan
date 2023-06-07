import React from "react";

const FileUploader = (props) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <button
        className=" p-1 px-2 text-sm text-primary border border-primary rounded-md w-auto h-9 "
        onClick={handleClick}
      >
        Choose an image
      </button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
export default FileUploader;
