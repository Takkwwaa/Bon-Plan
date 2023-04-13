import styles from "../style.js";
const Content = () => {
  return (
    <section className="flex flex-col sm:py-6 py-3 w">
      <div
        className={` flex-grow ${styles.flexStart} flex-col xl:px-0 sm:px-14 px-4 `}
      >
        {" "}
        <p className="text-white">content</p>
      </div>
    </section>
  );
};

export default Content;
