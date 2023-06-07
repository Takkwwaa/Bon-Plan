import { blacklogo, signup } from "../assets";
import { useState, useRef, useEffect } from "react";
import axios from "../axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { ErrorMessage } from "../components";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SignupStore = () => {
  const REGISTER_URL = "/api/stores";
  const navigate = useNavigate();
  const [violations, setViolations] = useState("");
  const [loading, setLoading] = useState(false);
  const [Errors, setErrors] = useState("");

  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(7),
      description: yup.string().required().min(10),
      name: yup.string().required().min(3),
      phone: yup.string().required().min(8).max(8),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = () => {
    // e.preventDefault();
    const { email, password, name, description, phone } = getValues();
    setLoading(true);
    const response = axios
      .post(
        REGISTER_URL,
        JSON.stringify({
          name,
          description,
          phone: phone,
          email,
          password,
        }),
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        setLoading(false);
        navigate("/store/Login");
        console.log("success", response.data);
      })
      .catch((error) => {
        if (error?.response?.status === 422) {
          setViolations(error?.response?.data?.violations);
          notify();
        }
        setLoading(false);
        console.log("error", error);
      });
    const notify = () =>
      toast.error(violations[0].message, {
        position: "top-end",
        theme: "light",
        autoClose: 3000,
      });
  };
  return (
    <>
      <ToastContainer />
      <img
        src={blacklogo}
        className="absolute flex justify-start align-top sm:w-[180px] sm:h-[70px] h-12 w-28 z-20 mt-[8px] ml-3 "
      />
      <div className="w-screen relative flex justify-center items-center overflow-hidden h-screen bg-[#f2f2f2] ">
        <div className="flex flex-row justify-center items-center bg-white w-5/6 smm:w-1/2 h-2/3 absolute rounded-xl border overflow-hidden border-transparent drop-shadow-lg">
          <div className="sm:w-1/2 w-full h-full bg-[#333333] border-none flex items-center justify-center rounded-tl-xl rounded-bl-xl ">
            <div className="bg-[#333333] rounded-sm smm:w-3/2 h-[85%] w-[85%] ">
              <h1 className=" font-arimo font-bold text-2xl flex align-middle justify-center py-4 text-white tracking-widest ">
                Sign Up
              </h1>
              <form
                className=" flex flex-col justify-center gap-4 px-2 mt-2 "
                onSubmit={handleSubmit(handleOnSubmit)}
              >
                {console.log("errr", errors, violations)}
                <div className="flex flex-row justify-between gap-2 ">
                  <div className=" w-1/2">
                    <input
                      type="text"
                      className=" pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                      id="name"
                      placeholder="Name"
                      {...register("name")}
                      autoComplete="off"
                    />
                    {errors?.name ? (
                      <ErrorMessage text={errors?.name?.message} />
                    ) : null}
                  </div>
                  <div className=" w-1/2">
                    <input
                      type="text"
                      className=" pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                      id="phone"
                      placeholder="phone"
                      {...register("phone")}
                      autoComplete="off"
                    />
                    {errors?.phone ? (
                      <ErrorMessage text={errors?.phone?.message} />
                    ) : null}
                  </div>
                </div>
                <div>
                  <textarea
                    type="text"
                    className=" pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                    id="description"
                    placeholder="Describe your store"
                    {...register("description")}
                    autoComplete="off"
                  />
                  {errors?.description ? (
                    <ErrorMessage text={errors?.description?.message} />
                  ) : null}
                </div>
                <div>
                  <input
                    className=" pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                    placeholder="Enter email"
                    {...register("email")}
                  />
                  {errors?.email ? (
                    <ErrorMessage text={errors?.email?.message} />
                  ) : null}
                </div>
                <div>
                  <input
                    className=" pl-1 text-sm block min-h-[auto] w-full rounded border-0 bg-[#ffffff] py-[0.32rem] leading-[1.6] outline-none focus:outline-1 focus:outline-primary"
                    placeholder="Enter Password"
                    type="password"
                    {...register("password")}
                  />
                  {errors?.password ? (
                    <ErrorMessage text={errors?.password?.message} />
                  ) : null}
                </div>
                {loading && (
                  <div
                    role="status"
                    className="flex justify-center items-center"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only text-primary">Loading...</span>
                  </div>
                )}
                <input
                  disabled={loading}
                  on
                  type="submit"
                  className={`${
                    loading ? "hidden" : "block"
                  } px-8 align-middle rounded w-full bg-primary py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg  `}
                />
                {/* {violations?.length
                  ? violations?.map(({ propertyPath, message }) =>
                      setErrors(Errors + { message })
                    )
                  : null} */}
                {/* {violations?.length
                  ? violations?.map(({ propertyPath, message }) => (
                    )
                  : null} */}
                <p className="font-poppins text-white text-xs pt-4 pb-3 flex justify-center ">
                  You have an account ?{" "}
                  <Link to="/store/Login">
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

export default SignupStore;
