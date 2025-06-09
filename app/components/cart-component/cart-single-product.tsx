import React, { useState } from "react";
import deleteIcon from "../../assets/svgs/deleteIcon.svg";
import minusIcon from "../../assets/svgs/product-detail-svg/minusIcon.svg";
import plusIcon from "../../assets/svgs/product-detail-svg/plusIcon.svg";

export const CartSingleProduct = ({
  imgSrc,
  size,
  productName,
  color,
  productPrice,
}: {
  imgSrc: string;
  size: string;
  productName: string;
  color: string;
  productPrice: number;
}) => {
  const [quantityNeeded, setQuantityNeeded] = useState(1);

  return (
    <div className="flex justify-between items-stretch w-full">
      <div className="w-1/2 min-h-full flex gap-4 shrink-0">
        <span>
          <img src={imgSrc} alt="" />
        </span>
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-satoshi-bold text-xl"> {productName} </p>
            <p className="font-satoshi-reg text-black text-sm">
              Size: <span className="text-black/60">{size}</span>
            </p>
            <p className="font-satoshi-reg text-black text-sm">
              Color: <span className="text-black/60">{color}</span>
            </p>
          </div>
          <div className="text-black">
            <p className="font-satoshi-bold text-2xl">${productPrice}</p>
          </div>
        </div>
      </div>
      <div className="w-1/2 min-h-full flex flex-col items-end justify-between">
        <span>
          <img className="cursor-pointer" src={deleteIcon} alt="" />
        </span>
        <div className="bg-white-50 text-black/60 rounded-full  w-40 flex justify-between items-center  py-3 px-5 ">
          <span>
            <img
              src={minusIcon}
              className="w-4 h-4 cursor-pointer"
              alt="minus_icon"
              onClick={() =>
                setQuantityNeeded((prev) => (prev > 1 ? prev - 1 : prev))
              }
            />
          </span>
          <span className="font-satoshi-med text-black text-base">
            {quantityNeeded}
          </span>
          <span>
            <img
              src={plusIcon}
              onClick={() => setQuantityNeeded((prev) => prev + 1)}
              className="w-4 h-4 cursor-pointer"
              alt="plus_icon"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
