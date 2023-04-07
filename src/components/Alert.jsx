import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { closeblack, error } from "../assets";

const Alert = (props) => {
  const handleCloseClick = () => {
    props.onClose();
  };
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center m-4">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="bg-white sm:p-8 p-4 rounded-lg z-10 ">
        <div className="flex justify-end">
          <img
            src={closeblack}
            alt="close"
            className="cursor-pointer m-0 "
            onClick={handleCloseClick}
          />
        </div>
        <div className="flex justify-center items-center mb-4">
          <img src={error} alt="error" />
        </div>
        <h1 className="text-lg mb-4 font-poppins flex justify-center text-black">
          Sorry you should connect first !
        </h1>
        <p className="text-lg mb-4 font-poppins flex justify-center text-black gap-1">
          <Link to="/Login">
            <span className="text-lg mb-4 font-poppins text-primary underline cursor-pointer">
              Login
            </span>
          </Link>
          or
          <Link to="/Signup">
            <span className="text-lg mb-4 font-poppins text-primary underline cursor-pointer">
              Signup
            </span>
          </Link>
          .
        </p>
      </div>
    </div>,
    document.body
  );
};

export default Alert;
