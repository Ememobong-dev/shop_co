import cancelIcon from "app/assets/svgs/cancel-white.svg"
import { useState } from "react";

export const TopmostHeader = () => {
  const [showHeader, setShowHeader] = useState(true)
  return (
    <div className={` ${showHeader ? "flex" : "hidden"} w-full bg-black m-0 py-2  justify-center items-center`}>
      <span className="flex gap-2 text-white font-satoshi">
        <p className="font-normal text-sm font-satoshi">Sign up and get 20% off to your first order. </p>
        <p className="underline font-satoshi text-sm font-medium">Sign Up Now</p>
      </span>
      <div className="absolute right-32 hidden lg:block">
        <img src={cancelIcon} onClick={() => setShowHeader(false)} className="cursor-pointer" alt="cancel_icon" />
      </div>
    </div>
  );
};
