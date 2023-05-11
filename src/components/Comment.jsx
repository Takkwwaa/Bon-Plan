import { Logo, User, notification, home } from "../assets";
const Comment = () => {
  return (
    <div className=" h-auto font-poppins flex items-start justify-center gap-2 ">
      <img
        src={User}
        className=" rounded-full border border-white w-12 h-12 p-1"
      />
      <div>
        <h6 className=" font-medium sm:text-lg base"> Aminoo</h6>
        <p className="text-[#EAEAEA] text-sm rounded-r-lg rounded-bl-lg bg-zinc-800 p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque
          voluptatem amet dolorem, eum, in consectetur corporis at quo magni
          consequatur neque impedit tempora facilis? Labore cum nemo possimus
          at.
        </p>
      </div>
    </div>
  );
};

export default Comment;
