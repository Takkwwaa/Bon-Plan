import styles from "../style";
import {
  FeedbackForum,
  Feedbacks,
  Galerie,
  Head,
  StoreNavbar,
  UserInfoUpdate,
  UserNavbar,
} from "../components";
import React, { useState } from "react";

const StoreInterface = () => {
  const [showFeedbackForum, setShowFeedbackForum] = useState(false);
  const handleFeedbackClick = () => {
    setShowFeedbackForum(true);
  };
  const handleClose = () => {
    setShowFeedbackForum(false);
  };
  return (
    <div className=" w-screen bg-[#101010] h-screen overflow-y-scroll overflow-x-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-secondary `}>
        <div className={`w-full `}>
          <StoreNavbar showhome="true" />
        </div>
      </div>
      <div className={`sm:px-20 px-8 sm:pt-12 pt-6 pb-3 sm:pb-6  `}>
        <Head />
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Galerie />
        </div>
      </div>
      <div
        className={`sm:px-20 px-8 mt-5 flex sm:flex-row flex-col gap-4 items-start text-white justify-between pb-6`}
      >
        <button
          className="p-1 px-2 sm:text-lg text-xs font-arimo text-white border bg-primary border-primary leading-3 rounded-md w-auto sm:h-10 h-8  "
          type="submit"
          onClick={handleFeedbackClick}
        >
          GIVE FEEDBACK
        </button>
        {showFeedbackForum && <FeedbackForum onClose={handleClose} />}
        <div className=" sm:w-2/4 w-full">
          <Feedbacks />
        </div>
      </div>
    </div>
  );
};

export default StoreInterface;
