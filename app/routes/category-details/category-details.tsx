// import { useLoaderData } from "@react-router/react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/category-details";
import dropdownArrow from "../../assets/svgs/dropdownArrow.svg";
import casualCategory from "../../assets/data/casualCategory.json";
import { ProductCard } from "~/components/product-card/ProductCard";
import filterIcon from "../../assets/svgs/grey-filter.svg";
import rightChevron from "../../assets/svgs/right-chevron.svg";
import arrowUp from "../../assets/svgs/arrow-up.svg";
import { useState } from "react";
import colorCheckmark from "../../assets/svgs/product-detail-svg/color-checkmark.svg";
import { Button } from "~/components/Button";

export async function loader({ params }: Route.LoaderArgs) {
  const { categoryId } = params;

  return {
    product: {
      id: categoryId,
      name: "Sample Category",
    },
  };
}

export default function Component({ params }: Route.ComponentProps) {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const [productColor, setProductColor] = useState("color1");
  const [selectedSize, setSelectedSize] = useState("");

  const colorScheme = [
    "color1",
    "color2",
    "color3",
    "color4",
    "color5",
    "color6",
    "color7",
    "color8",
    "color9",
    "color10",
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  return (
    <div className="py-14 pb-48 px-5 md:px-14 3xl:px-32 w-full">
      <div className="flex gap-5">
        <div className="w-[25%] border border-black/10 rounded-3xl py-5 px-6 divide-y divide-black/10 flex flex-col gap-5">
          {/* Filter */}
          <div className="pb-5">
            <div>
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-satoshi-bold">Filter</h2>
                <span>
                  <img src={filterIcon} alt="filterIcon" />
                </span>
              </div>
            </div>
            <hr className="my-4 border-black/10" />
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <p className="text-black/60 text-base">T-shirts</p>
                <span>
                  <img src={rightChevron} alt="" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black/60 text-base">Shorts</p>
                <span>
                  <img src={rightChevron} alt="" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black/60 text-base">Shirts</p>
                <span>
                  <img src={rightChevron} alt="" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black/60 text-base">Hoodie</p>
                <span>
                  <img src={rightChevron} alt="" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black/60 text-base">Jeans</p>
                <span>
                  <img src={rightChevron} alt="" />
                </span>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="pb-5">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-xl font-satoshi-bold">Price</h2>
              <span>
                <img src={arrowUp} alt="arrowUp" />
              </span>
            </div>
          </div>
          {/* COLORS  */}
          <div className="pb-5">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-xl font-satoshi-bold">Colors</h2>
              <span>
                <img src={arrowUp} alt="arrowUp" />
              </span>
            </div>
            <div className="grid grid-cols-5 gap-y-3 mt-5">
              {colorScheme.map((color, idx) => (
                <div
                  onClick={() => setProductColor(color)}
                  className={`w-12 h-12 border border-black/20 cursor-pointer flex justify-center items-center rounded-full ${
                    idx === 0
                      ? "bg-[#00C12B]"
                      : idx === 1
                      ? "bg-[#F50606]"
                      : idx === 1
                      ? "bg-[#F5DD06]"
                      : idx === 2
                      ? "bg-[#F57906]"
                      : idx === 3
                      ? "bg-[#06CAF5]"
                      : idx === 4
                      ? "bg-[#063AF5]"
                      : idx === 5
                      ? "bg-[#7D06F5]"
                      : idx === 6
                      ? "bg-[#F506A4]"
                      : idx === 7
                      ? "bg-[#FFFFFF]"
                      : "bg-[#31344F]"
                  }`}
                >
                  {color === productColor && (
                    <span>
                      <img src={colorCheckmark} alt="checkmark" />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* SIZES  */}
          <div className="pb-5">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-xl font-satoshi-bold">Size</h2>
              <span>
                <img src={arrowUp} alt="arrowUp" />
              </span>
            </div>
            <div className="flex flex-wrap gap-5 mt-5">
              {sizes.map((size, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedSize(size)}
                  className={`cursor-pointer py-3 px-3 lg:px-8 flex justify-center items-center rounded-full hover:border hover:border-amber-200 lg:text-base font-satoshi-reg text-sm ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white-50 text-black/60"
                  } `}
                >
                  {" "}
                  {size}{" "}
                </div>
              ))}
            </div>
          </div>
          {/* Dress Style */}
          <div className="pb-5">
            <div>
              <div className="flex justify-between items-center w-full">
                <h2 className="text-xl font-satoshi-bold">Dress Style</h2>
                <span>
                  <img src={arrowUp} alt="arrowUp" />
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex justify-between items-center">
                <p className="text-black/60 text-base">Casual</p>
                <span>
                  <img src={rightChevron} alt="" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black/60 text-base">Formal</p>
                <span>
                  <img src={rightChevron} alt="" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black/60 text-base">Party</p>
                <span>
                  <img src={rightChevron} alt="" />
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-black/60 text-base">Gym</p>
                <span>
                  <img src={rightChevron} alt="" />
                </span>
              </div>
            </div>
            <div className="mt-5">
              <Button variant="filled" size="md" fullWidth text="Apply Filter" />
            </div>
          </div>
        </div>
        <div className="w-[75%]">
          {/* header */}
          <div className="w-full flex justify-between items-center">
            <div>
              <h3 className="font-satoshi-bold text-4xl">{product.id}</h3>
            </div>
            <div className="flex gap-3 ">
              <span>
                <p className="text-black/60">Showing 1-10 of 100 Products</p>
              </span>
              <div className="flex gap-1">
                <p className="text-black/60">Sort by:</p>
                <div className="flex gap-1 items-center cursor-pointer">
                  <p>Most Popular</p>
                  <span>
                    <img src={dropdownArrow} alt="brand_logo" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* products */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-5">
            {casualCategory.length > 0
              ? casualCategory.map((item, index) => (
                  <div key={index}>
                    <ProductCard
                      imgSrc={item.image}
                      title={item.title}
                      rating={item.rating}
                      discount={item.discount}
                      price={item.price}
                    />
                  </div>
                ))
              : "No top selling products"}
          </div>
        </div>
      </div>
    </div>
  );
}
