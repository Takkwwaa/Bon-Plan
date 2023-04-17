import { Content, Sidebar, UserNavbar } from "../components";
import styles from "../style";

const UserHome = () => {
  return (
    <div className=" w-screen bg-[#101010] h-screen relative overflow-x-hidden">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} bg-secondary z-20 top-0 sticky`}
      >
        <div className={`w-full `}>
          <UserNavbar showhome="false" />
        </div>
      </div>
      <div className=" flex justify-center items-center bg-secondary">
        <hr className=" w-4/5 text-white" />
      </div>
      <div className=" sm:w-[20%] w-0 m-0 p-0 z-50 fixed">
        <Sidebar />
      </div>
      <div className=" sm:w-[80%] w-full right-0 absolute">
        <Content />
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
