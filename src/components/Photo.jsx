import { deleteicon } from "../assets";
import { photos } from "../constants";
const Photo = () => {
  return (
    <>
      {" "}
      {photos.map((photo, index) => (
        <div className="flex items-center flex-col justify-center flex-grow sm:pt-4 pt-2 cursor-pointer hover:shadow-xl shadow-white ">
          <div className=" rounded-md sm:h-60 h-42 sm:w-56  w-36 " key={index}>
            <img src={photo} className=" w-full h-full object-cover" />
          </div>
          <img
            src={deleteicon}
            alt=""
            className=" bg-secondary sm:w-10 sm:h-10 w-8 h-8 pt-2"
          />
        </div>
      ))}
    </>
  );
};

export default Photo;
