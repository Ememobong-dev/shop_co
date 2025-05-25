import React from "react";
import { ratingFn } from "~/utils/RatingFn";
import fullStar from "../assets/svgs/golden-full-star.svg";
import halfStar from "../assets/svgs/golden-half-star.svg";
import greenMarkImg from "../assets/svgs/green-checkmark.svg";
import verticalDots from "../assets/svgs/product-detail-svg/three-vertical-dots.svg";

interface TestimonialProps {
  ratings: number;
  testifier: string;
  testimony: string;
  variant?: "customer" | "product";
  date?: string;
}

export const Testimonial = ({
  ratings,
  testifier,
  testimony,
  variant = "customer",
  date,
}: TestimonialProps) => {
  return (
    <div
      className={`flex flex-col gap-y-4  border rounded-lg  h-[250px] border-black/10 p-7  ${
        variant === "customer" ? "!w-[500px] shrink-0" : "w-full"
      } `}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {(() => {
            const { wholeValue, halfValue } = ratingFn(ratings);
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
        </div>
        {variant === "product" && (
          <span>
            <img src={verticalDots} alt="dots" />
          </span>
        )}
      </div>

      <div className="flex gap-3 items-center">
        <p className="font-bold text-black"> {testifier} </p>
        <span>
          <img src={greenMarkImg} className="w-5 h-5" alt="green_checkMark" />
        </span>
      </div>
      <p className="text-black/60 font-normal"> "{testimony}" </p>
      <p className="text-black/60 text-base font-satoshi-med font-normal">
        {date}
      </p>
    </div>
  );
};
