import { photos } from "../constants";
const Photo = () => {
  return (
    <>
      {" "}
      {photos.map((photo, index) => (
        <div
          className="bg-gradient-to-b bg-white rounded-md sm:h-60 h-42 sm:w-56  w-36 flex justify-start items-center flex-col "
          key={index}
        >
          <img src={photo} className=" w-full h-full object-cover" />
        </div>
      ))}
    </>
  );
};

export default Photo;
