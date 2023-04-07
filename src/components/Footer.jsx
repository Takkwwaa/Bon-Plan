import { Logo } from "../assets";
import { socialMedia } from "../constants";
import { phone, email, map } from "../assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section
      className=" sm:pt-20 sm:pl-10 sm:pr-10 pt-10 pl-5 pr-5"
      id="contact"
    >
      <div className="flex flex-col sm:flex-row justify-center gap-14 sm:gap-10 sm:justify-around items-center sm:items-start  mb-10 sm:mb-20">
        <div className=" flex flex-row sm:flex-col gap-6 sm:gap-2 justify-center items-start">
          <Link
            to="/Home"
            className=" font-poppins font-medium text-xs text-white hover:text-gray-500"
          >
            Home
          </Link>
          <Link
            to="/Login"
            className="font-poppins font-medium text-xs text-white hover:text-gray-500"
          >
            Login
          </Link>
          <Link
            to="/Signup"
            className="font-poppins font-medium text-xs text-white hover:text-gray-500"
          >
            Signup
          </Link>
          <Link
            to="#Contact"
            className="font-poppins font-medium text-xs text-white hover:text-gray-500"
          >
            Contact us
          </Link>
        </div>
        <div className="flex flex-col gap-2 justify-center items-start">
          <div className="flex flex-row gap-4">
            <img src={phone} alt="Phone" />
            <p className=" font-poppins text-white text-xs">+ (216) 50537925</p>
          </div>
          <div className="flex flex-row gap-4">
            <img src={email} alt="Email" />
            <p className=" font-poppins text-white text-xs">
              BonPlan@gmail.com
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <img src={map} alt="Map" />
            <p className=" font-poppins text-white text-xs">
              14 RUE EdenBoulevard Paris
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center sm:items-start gap-4 sm:gap-16">
          <img
            src={Logo}
            alt="Logo"
            className="sm:w-[180px] sm:h-[70px] h-12 w-28"
          />
          <div className="flex flex-row md:mt-0 mt-6">
            {socialMedia.map((social, index) => (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
                onClick={() => window.open(social.link)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center border-t-[1px] border-[#A3A3A3]">
        <p className=" pt-2 pb-2 text-xs font-poppins text-white">
          BonPlan @ all rights reserved 2023
        </p>
      </div>
    </section>
  );
};

export default Footer;
