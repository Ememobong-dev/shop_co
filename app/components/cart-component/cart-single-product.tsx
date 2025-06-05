import React, { useState } from "react";
import deleteIcon from "../../assets/svgs/deleteIcon.svg";
import thumbnail2 from "../../assets/svgs/product-detail-svg/thumbnail2.svg";
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
    <div className="p-4 flex justify-between w-full">
      <div className="flex gap-4 shrink-0">
        <span>
          <img src={imgSrc} alt="" />
        </span>
        <div className="flex justify-between">
          <div>
            <p> {productName} </p>
            <p>
              Size: <span>{size}</span>
            </p>
            <p>
              Color: <span>{color}</span>
            </p>
          </div>
          <div>
            <p>{productPrice}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-bteween w-full">
        <span>
          <img src={deleteIcon} alt="" />
        </span>
        <div className="bg-white-50 text-black/60 rounded-full  flex justify-between items-center w-1/2 py-3 px-5 ">
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
