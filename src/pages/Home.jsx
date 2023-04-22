import React from "react";
import { Hero, ItemsList, Navbar, Footer } from "../components";
import styles from "../style";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full overflow-hidden bg-[#101010] ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ItemsList />
        </div>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default Home;
