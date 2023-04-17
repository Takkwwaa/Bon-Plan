import StoreCard from "./StoreCard";

const Content = () => {
  return (
    <section className=" flex-col sm:pt-6 pt-2 overflow-y-auto overflow-x-hidden bg-secondary">
      <div
        className={`flex flex-wrap sm:gap-6 gap-3 justify-center flex-grow `}
      >
        {" "}
        <StoreCard />
      </div>
    </section>
  );
};

export default Content;
