import cancelIcon from "app/assets/svgs/cancel-white.svg"

export const TopmostHeader = () => {
  return (
    <div className="w-full bg-black m-0 py-2 flex justify-center items-center">
      <span className="flex gap-2 text-white font-satoshi">
        <p className="font-normal text-sm font-satoshi">Sign up and get 20% off to your first order. </p>
        <p className="underline font-satoshi text-sm font-medium">Sign Up Now</p>
      </span>
      <div className="absolute right-32 hidden lg:block">
        <img src={cancelIcon} alt="cancel_icon" />
      </div>
    </div>
  );
};
