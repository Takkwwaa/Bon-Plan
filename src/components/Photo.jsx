import { photos } from "../constants";
const Photo = () => {
  return (
    <>
      {" "}
      {photos.map((photo, index) => (
        <div
          className="bg-gradient-to-b bg-white rounded-md sm:h-60 h-42 sm:w-56  w-36 flex justify-start items-center flex-col sm:pt-4 pt:2"
          key={index}
        >
          <img src={photo} className=" w-full h-full object-contain" />
        </div>
      ))}
    </>
  );
};

export default Photo;
