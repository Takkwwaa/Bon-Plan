import { Link } from "react-router-dom";
import { blacklogo, signup } from "../assets";
import { useState, useRef, useEffect } from "react";
import axios from "../axios";

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const REGISTER_URL = "/api/users";
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [birthdate, setbirthdate] = useState("");
  useEffect(() => {
    console.log(username);
  }, [username, password, firstname, lastname, email, birthdate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          user_name: username,
          first_name: firstname,
          last_name: lastname,
          birth_date: birthdate,
          email,
          password,
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img
        src={blacklogo}
        className="absolute flex justify-start align-top sm:w-[180px] sm:h-[70px] h-12 w-28 z-20 mt-[8px] ml-3 "
      />
      <div className="w-screen relative flex justify-center items-center overflow-hidden h-screen bg-[#f2f2f2] ">
        <div className="flex flex-row justify-center items-center bg-white w-5/6 smm:w-1/2 h-2/3 absolute rounded-xl border overflow-hidden border-transparent drop-shadow-lg">
          <div className="sm:w-1/2 w-full h-full bg-[#333333] border-none flex items-center justify-center rounded-tl-xl rounded-bl-xl ">
            <div className="bg-[#333333] rounded-sm smm:w-3/2 h-[85%] w-[85%] ">
              <h1 className=" font-arimo font-bold text-2xl flex align-middle justify-center py-6 text-white tracking-widest ">
                Sign Up
              </h1>
              <form
                className=" flex flex-col justify-center px-4 "
                onSubmit={handleSubmit}
              >
                <div className="flex flex-row justify-between gap-2 mb-6">
                  <input
                    type="text"
                    className=" pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                    id="firstname"
                    placeholder="First Name"
                    onChange={(e) => setfirstname(e.target.value)}
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    className=" pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                    id="lastname"
                    placeholder="Last Name"
                    onChange={(e) => setlastname(e.target.value)}
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-row justify-between gap-2 mb-6">
                  <input
                    type="text"
                    className=" pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                    id="username"
                    placeholder="User Name"
                    onChange={(e) => setusername(e.target.value)}
                    autoComplete="off"
                  />
                  <input
                    type="date"
                    className=" pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                    id="birthdate"
                    placeholder="Birth Date"
                    onChange={(e) => setbirthdate(e.target.value)}
                  />
                </div>
                <input
                  type="email"
                  className=" pl-1 mb-6 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                  id="email"
                  placeholder="Enter email"
                  onChange={(e) => setemail(e.target.value)}
                  autoComplete="off"
                />
                <input
                  type="password"
                  className=" pl-1 mb-12 block text-sm min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                />

                <button
                  type="submit"
                  className={`${
                    loading ? "flex" : "hidden"
                  } px-8 align-middle rounded w-full bg-primary py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg `}
                >
                  Submit
                </button>
                <p className="font-poppins text-white text-xs pt-8 pb-3 flex justify-center ">
                  You have an account ?{" "}
                  <Link to="/Login">
                    <span className="font-poppins text-primary text-xs underline cursor-pointer">
                      Connect
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="bg-white w-1/2 h-full align-middle sm:flex hidden px-6">
            <img src={signup} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
