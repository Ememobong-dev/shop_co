import React from "react";
import { ratingFn } from "~/utils/RatingFn";
import fullStar from "../assets/svgs/golden-full-star.svg";
import halfStar from "../assets/svgs/golden-half-star.svg";
import greenMarkImg from "../assets/svgs/green-checkmark.svg";

interface TestimonialProps {
  ratings: number;
  testifier: string;
  testimony: string;
}

export const Testimonial = ({
  ratings,
  testifier,
  testimony,
}: TestimonialProps) => {
  return (
    <div className="flex flex-col gap-y-4  border rounded-lg !w-[500px] h-[250px] border-black/10 p-7 shrink-0">
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
      <div className="flex gap-3 items-center">
        <p className="font-bold text-black"> {testifier} </p>
        <span>
          <img src={greenMarkImg} className="w-5 h-5" alt="green_checkMark" />
        </span>
      </div>

      <p className="text-black/60 font-normal"> "{testimony}" </p>
    </div>
  );
};
