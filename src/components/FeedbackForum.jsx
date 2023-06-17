import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { close, error } from "../assets";
import { Rate } from ".";

const FeedbackForum = (props) => {
  const handleCloseClick = () => {
    props.onClose();
  };
  return ReactDOM.createPortal(
    // the rate rule will be retrieved from the rate rule table considering the category of the store maybe will add
    //the possibilitie of adding new rate rule for the user that the admin will manage it later approve it or refuse
    //it the user feedback will update the table user store rate that by consuquence will update the store global rate
    <div className="fixed inset-0 z-50 flex items-start mt-[10%] justify-center m-4">
      <div className="fixed inset-0 bg-white opacity-5 "></div>
      <div className="bg-black border-2 border-white sm:p-8 p-4 rounded-lg z-10 sm:w-[25%] w-[95%] ">
        <div className="flex justify-end">
          <img
            src={close}
            alt="close"
            className="cursor-pointer m-0 "
            onClick={handleCloseClick}
          />
        </div>
        <form action="" className="flex flex-col pl-4 font-poppins text-black ">
          <h5 className="py-3 sm:text-2xl text-xl font-arimo text-primary ">
            Your Feedback
          </h5>
          <div>
            <Rate title="Price : " maxRating={5} />
            <Rate title="Service Quality : " maxRating={5} />
            <Rate title="Food Quality : " maxRating={5} />
          </div>
          <div>
            {" "}
            <textarea
              type="text"
              className=" mt-5 pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
              id="description"
              placeholder="Comment"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-end mt-5">
            <button
              className="p-1 px-2 text-sm text-primary border border-primary rounded-md w-auto h-9 "
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default FeedbackForum;
