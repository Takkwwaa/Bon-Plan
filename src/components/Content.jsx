import styles from "../style.js";
import Items from "./Items.jsx";
const Content = () => {
  return (
    <section className="flex flex-col sm:py-8 py-4 w">
      <div
        className={` xl:px-0 sm:px-14 px-4 flex flex-wrap justify-around flex-grow `}
      >
        {" "}
        <Items />
      </div>
    </section>
  );
};

export default Content;
