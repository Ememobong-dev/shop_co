// import { useLoaderData } from "@react-router/react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/product-details";
import thumbnail1 from "../../assets/svgs/product-detail-svg/thumbnail1.svg";
import thumbnail2 from "../../assets/svgs/product-detail-svg/thumbnail2.svg";
import mainProductImg from "../../assets/svgs/product-detail-svg/mainProductImg.svg";
import minusIcon from "../../assets/svgs/product-detail-svg/minusIcon.svg";
import plusIcon from "../../assets/svgs/product-detail-svg/plusIcon.svg";
import filterIcon from "../../assets/svgs/product-detail-svg/filter-icon.svg";
import fullStar from "../../assets/svgs/golden-full-star.svg";
import halfStar from "../../assets/svgs/golden-half-star.svg";
import { Button } from "~/components/Button";
import { useState } from "react";
import dropdownArrow from "../../assets/svgs/dropdownArrow.svg";

export async function loader({ params }: Route.LoaderArgs) {
  const { productId } = params;

  return {
    product: {
      id: productId,
      name: "Sample Product",
      description: "This is a sample product.",
    },
  };
}


const testimonial = [
  {
    testifier: "Sarah M",
    testimony:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    ratings: 5,
  },
  {
    testifier: "Alex K",
    testimony:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    ratings: 3,
  },
  {
    testifier: "James L",
    testimony:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    ratings: 3.5,
  },
  {
    testifier: "Moose J",
    testimony:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    ratings: 4,
  },
  {
    testifier: "Sarah M",
    testimony:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    ratings: 5,
  },
  {
    testifier: "James M",
    testimony:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    ratings: 5,
  },
];


export default function Component({ params }: Route.ComponentProps) {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const [activeTab, setActiveTab] = useState("ratings");
  const productImages = [thumbnail1, thumbnail1, thumbnail2];

  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col gap-14 py-14 pb-48 px-5 3xl:px-0 max-w-[1400px]">
        {/* HEADEER */}
        <div>
          <div className="flex gap-3">
            <div className="flex item-start gap-3 w-1/2">
              <div className="flex flex-col gap-3">
                {productImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} className="w-full" alt="img_thumbnail" />
                  </div>
                ))}
              </div>
              <div className="">
                <img src={mainProductImg} className="w-full" alt="main_image" />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-4 divide-y-2 divide-black/10">
              <div className="w-full flex flex-col gap-4 pb-2">
                <h3 className="font-integral-bold text-4xl ">
                  One life graphic Tshirt
                </h3>
                <div className="flex gap-2">
                  <span>
                    <img src={fullStar} alt="" />
                  </span>
                  <span>
                    <img src={fullStar} alt="" />
                  </span>
                  <span>
                    <img src={fullStar} alt="" />
                  </span>
                  <span>
                    <img src={fullStar} alt="" />
                  </span>
                  <span>
                    <img src={halfStar} alt="" />
                  </span>
                  <p className="text-black text-sm">
                    4<span className="text-black/40">/5</span>{" "}
                  </p>
                </div>
                {/*  */}
                <div className="flex gap-5 items-center">
                  <p className="</span>font-satoshi-bold text-black text-xl">
                    $260
                  </p>
                  <p className="font-satoshi-bold line-through text-black/40 text-xl">
                    $300
                  </p>
                  <span className="rounded-full text-[12px] py-2 px-3 text-[#FF3333] bg-[#FF3333]/10 font-medium">
                    -40%
                  </span>
                </div>
                {/*  */}
                <p>
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>
              {/* second segment */}
              <div className="w-full flex flex-col gap-4 py-2">
                <p>Select Colors</p>
                <div className="flex gap-3">
                  {[...Array(3)].map((_, idx) => (
                    <div className="w-6 h-6 rounded-full border bg-amber-300"></div>
                  ))}
                </div>
              </div>
              {/* third segment */}
              <div className="w-full flex flex-col gap-4 py-2">
                <p>Choose Size</p>
                <div className="flex gap-3">
                  {["Small", "Medium", "Large", "X-Large"].map((size, idx) => (
                    <div
                      className={`py-2 px-8 flex justify-center items-center rounded-full bg-white-50 text-black/60 text-base font-satoshi-reg `}
                    >
                      {" "}
                      {size}{" "}
                    </div>
                  ))}
                </div>
              </div>
              {/* fourth segment */}
              <div className="w-full flex flex-col gap-4 py-2">
                <p>Choose Size</p>
                <div className="flex gap-8 justify-between">
                  <div className="bg-white-50 text-black/60 rounded-full  flex justify-between items-center w-1/2 py-3 px-5 ">
                    <span>
                      <img
                        src={minusIcon}
                        className="w-4 h-4"
                        alt="minus_icon"
                      />
                    </span>
                    <span className="font-satoshi-med text-black text-base">
                      1
                    </span>
                    <span>
                      <img src={plusIcon} className="w-4 h-4" alt="plus_icon" />
                    </span>
                  </div>
                  <Button variant="filled" fullWidth text="Add to Cart" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SECOND SECTION */}
        <div>
          <div className="flex w-full justify-between border-b border-black/10">
            <div
              onClick={() => setActiveTab("details")}
              className={`${
                activeTab === "details"
                  ? "border-b-2 border-black cursor-pointer text-black"
                  : "text-black/60 "
              } w-full flex justify-center items-center`}
            >
              <p className="py-3 cursor-pointer">Product Details</p>
            </div>
            <div
              onClick={() => setActiveTab("ratings")}
              className={`${
                activeTab === "ratings"
                  ? "border-b-2 border-black cursor-pointer text-black"
                  : "text-black/60"
              } w-full flex justify-center items-center `}
            >
              <p className="py-3 cursor-pointer">Rating & Reviews</p>
            </div>
            <div
              onClick={() => setActiveTab("faqs")}
              className={`${
                activeTab === "faqs"
                  ? "border-b-2 border-black cursor-pointer text-black"
                  : "text-black/60"
              } w-full flex justify-center items-center`}
            >
              <p className="py-3 cursor-pointer">FAQs</p>
            </div>
          </div>
          {/* TABS OUTPUT */}
          <div className="mt">
            {activeTab === "details" ? (
              <>
                <h1 className="text-4xl text-[red]">HELLO WORLD</h1>
              </>
            ) : activeTab === "ratings" ? (
              <>
                {/* Filter */}
                <div className="flex justify-between items-center mt-5">
                  <div className="flex gap-2 items-end">
                    <p className="text-black font-satoshi-bold text-2xl">
                      All Reviews
                    </p>
                    <p className="text-black/60 text-sm">(451)</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className=" flex justify-center items-center px-3 py-2 w-10 h-10  rounded-full bg-white-50">
                      <img src={filterIcon} alt="filter_icon" />
                    </div>
                    <div
                      className={`py-2 px-5 w-32 flex justify-between items-center rounded-full bg-white-50 text-black text-base font-satoshi-reg `}
                    >
                      Latest
                      <span>
                        <img src={dropdownArrow} alt="dropdown_icon" />
                      </span>
                    </div>
                    <div
                      className={`py-2 px-8 flex justify-center items-center rounded-full bg-black text-white text-base font-satoshi-reg `}
                    >
                      Write a Review
                    </div>
                  </div>
                </div>
                <div className="my-8 grid grid-cols-2">
                  { testimonial.map( (item, index) => (
                    <div key={index} className="py-7 px-8 border border-black/10">

                    </div>
                  ) )

                  }


                </div>
              </>
            ) : (
              <>HELLO FAQS</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
