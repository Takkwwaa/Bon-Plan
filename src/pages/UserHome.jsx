import { Content, Footer, Hero, Sidebar, UserNavbar } from "../components";
import styles from "../style";

const UserHome = () => {
  return (
    <div className="w-screeb overflow-hidden bg-[#101010] h-screen">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <UserNavbar />
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <hr className=" w-4/5 text-white" />
      </div>
      <div className="flex justify-start items-start">
        <div className=" w-[20%]">
          <Sidebar />
        </div>
        <hr />
        <div className=" w-[80%] ">
          <Content />
        </div>
      </div>
      {/* <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Favourite />
        </div>
      </div> */}
    </div>
  );
};

export default UserHome;
