import { Link, useNavigate } from "react-router-dom";
import { login, blacklogo } from "../assets";
import { useState, useContext, useEffect } from "react";
import authStore from "../authStore";
import { UserContext } from "../UserContext";

const LoginStore = () => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleOnSubmit = async () => {
    event.preventDefault();
    try {
      const id = await authStore.checkStore(email, password);
      if (id) {
        const storeData = await authStore.fetchStore(id);
        // Do something with the retrieved store data
        console.log(storeData);
        navigate(`/store/profile`);
        window.location.reload();
      } else {
        console.log("User does not exist");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ...

  // UseEffect to update the user context when the user data changes
  useEffect(() => {
    if (user) {
      // User data has changed, update the user context
      setUser(user);
    }
  }, [user, setUser]);
  return (
    <>
      <img
        src={blacklogo}
        className="absolute flex justify-start align-top sm:w-[180px] sm:h-[70px] h-12 w-28 z-20 mt-[8px] ml-3 "
      />
      <div className="w-screen relative flex justify-center items-center overflow-hidden h-screen bg-[#f2f2f2] ">
        <div className="flex flex-row justify-center items-center bg-white w-5/6 smm:w-1/2 h-2/3 absolute rounded-xl border overflow-hidden border-transparent drop-shadow-lg">
          <div className="sm:w-1/2 w-full h-full bg-[#333333] border-none flex items-center justify-center rounded-tl-xl rounded-bl-xl ">
            <div className="bg-[#333333] rounded-sm smm:w-3/2 h-[85%] w-[85%]">
              <h1 className=" font-arimo font-bold text-2xl flex align-middle justify-center py-8 text-white tracking-widest ">
                Login
              </h1>
              <form
                className=" flex flex-col justify-center px-8 "
                onSubmit={handleOnSubmit}
              >
                <input
                  type="email"
                  className=" pl-1 mb-6 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  onChange={(e) => setemail(e.target.value)}
                />
                <input
                  type="password"
                  className=" pl-1 mb-12 block text-sm min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={(e) => setpassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-8 align-middle rounded w-full bg-primary py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg  "
                >
                  Submit
                </button>
                <p className="  flex justify-center font-poppins text-white text-sm pt-8">
                  No account ?{" "}
                  <Link to="/Signup">
                    <span className="font-poppins text-primary text-sm underline cursor-pointer">
                      Register Now
                    </span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="bg-white w-1/2 h-full align-middle sm:flex hidden ">
            <img src={login} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginStore;
