import styles from "../style.js";
import { burger } from "../assets";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-col flex-row sm:py-6 py-3 ">
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-14 px-4 `}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              <span className="text-[#FF4747]">B</span>on{" "}
              <span className="text-[#FF4747]">P</span>lan{" "}
              <br className="sm:block hidden" />{" "}
            </h1>
            <p className={`${styles.paragraph} max-w-[550px] mt-5 text-white`}>
              Whether you're a foodie or just looking for a new place to dine
              out, our website offers personalized food plans based on your
              interests and location. We take into account your dietary
              preferences, budget, and favorite cuisine to provide
              recommendations for restaurants, cafes, and hotels that match your
              taste. With our platform, you can explore new food experiences and
              discover hidden gems in your area.
            </p>
          </div>
          <img
            src={burger}
            alt=""
            className="w-[400px] h-[510px] sm:block hidden mr-[3%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
