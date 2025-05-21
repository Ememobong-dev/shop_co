import React from "react";

import fullStar from "../assets/svgs/golden-full-star.svg";
import halfStar from "../assets/svgs/golden-half-star.svg";


type ProductCardType = { imgSrc: string; title: string; rating: number, discount: number; price: number; };

export const ProductCard = ({ imgSrc, title, rating, discount, price }: ProductCardType) => {
  const actualPriceFn = ({
    price,
    discount,
  }: {
    price: number;
    discount: number;
  }) => {
    let discountPrice = (discount / 100) * price;
    return price - discountPrice;
  };

  const ratingFn = (rating: number) => {
    let wholeValue;
    let halfValue: 0 | 1;
    if (rating % 2 !== 0) {
      // it means it has a remainder
      wholeValue = Math.floor(rating);
      halfValue = 1;
    } else {
      wholeValue = rating;
      halfValue = 0;
    }

    return { wholeValue, halfValue };
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <img className="w-full" src={imgSrc} />
      <div className="flex flex-col gap-3">
        <p className="font-satoshi-bold text-lg">
          {" "}
          {title
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}{" "}
        </p>
        {/* RATINGS */}
        <div className="flex gap-2 items-center">
          <div className="flex gap-2">
            {(() => {
              const { wholeValue, halfValue } = ratingFn(rating);
              return (
                <>
                  {[...Array(wholeValue)].map((_, index) => (
                    <span key={index}>
                      <img src={fullStar} alt="" />
                    </span>
                  ))}
                  {halfValue ? (
                    <span>
                      <img src={halfStar} alt="" />
                    </span>
                  ) : null}
                </>
              );
            })()}
            <p className="text-black text-sm">
              {rating.toFixed(1)}
              <span className="text-black/40">/5</span>{" "}
            </p>
          </div>
        </div>
        {/* PRICES */}
        <div>
          {discount > 0 ? (
            <div className="flex gap-5 items-center">
              <p className="</span>font-satoshi-bold text-black text-xl">
                {" "}
                $
                {actualPriceFn({
                  price: price,
                  discount: discount,
                })}{" "}
              </p>
              <p className="font-satoshi-bold line-through text-black/40 text-xl">
                {" "}
                ${price}
              </p>
              <span className="rounded-full text-[12px] py-2 px-3 text-[#FF3333] bg-[#FF3333]/10 font-medium">
                {" "}
                - {discount} %
              </span>
            </div>
          ) : (
            <div>
              {" "}
              <p className="font-satoshi-bold text-black text-xl">
                {" "}
                ${price}{" "}
              </p>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
