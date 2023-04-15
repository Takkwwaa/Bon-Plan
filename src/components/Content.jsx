import StoreCard from "./StoreCard";

const Content = () => {
  return (
    <section className="flex flex-col sm:py-8 py-4 w-full h-screen">
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
