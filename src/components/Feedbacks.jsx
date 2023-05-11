import Comment from "./Comment";

const Feedbacks = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-[500px] border border-primary rounded-lg py-5 px-6 overflow-y-auto ">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Feedbacks;
