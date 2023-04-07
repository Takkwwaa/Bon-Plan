import { Footer, UserNavbar } from "../components";
import styles from "../style";

const UserHome = () => {
  return (
    <div className="w-full overflow-hidden bg-[#101010] ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <UserNavbar />
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
