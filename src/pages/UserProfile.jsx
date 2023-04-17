import styles from "../style";
import { UserNavbar } from "../components";
const UserProfile = () => {
  return (
    <div className=" w-screen bg-[#101010] h-screen ">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-secondary `}>
        <div className={`w-full `}>
          <UserNavbar showhome="true" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
