// import { useLoaderData } from "@react-router/react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/product-details";
import thumbnail1 from "../../assets/svgs/product-detail-svg/thumbnail1.svg";
import thumbnail2 from "../../assets/svgs/product-detail-svg/thumbnail2.svg";
import mainProductImg from "../../assets/svgs/product-detail-svg/mainProductImg.svg";
import minusIcon from "../../assets/svgs/product-detail-svg/minusIcon.svg";
import plusIcon from "../../assets/svgs/product-detail-svg/plusIcon.svg";
import filterIcon from "../../assets/svgs/product-detail-svg/filter-icon.svg";
import colorCheckmark from "../../assets/svgs/product-detail-svg/color-checkmark.svg";
import fullStar from "../../assets/svgs/golden-full-star.svg";
import halfStar from "../../assets/svgs/golden-half-star.svg";
import { Button } from "~/components/Button";
import { useState } from "react";
import dropdownArrow from "../../assets/svgs/dropdownArrow.svg";
import { Testimonial } from "~/components/Testimonial";
import { CenteredText } from "~/components/CenteredHeaderText";
import similarToTaste from "../../assets/data/similarToTaste.json";
import { ProductCard } from "~/components/product-card/ProductCard";
import mainImg1 from "../../assets/images/singleProduct/image1.png"
import mainImg2 from "../../assets/images/singleProduct/image2.png"
import mainImg3 from "../../assets/images/singleProduct/image3.png"

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
    postedOn: "August 14, 2023",
    ratings: 5,
  },
  {
    testifier: "Alex K",
    testimony:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    postedOn: "August 15, 2023",
    ratings: 3,
  },
  {
    testifier: "James L",
    testimony:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    postedOn: "August 16, 2023",
    ratings: 3.5,
  },
  {
    testifier: "Moose J",
    testimony:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    postedOn: "August 17, 2023",
    ratings: 4,
  },
  {
    testifier: "Sarah M",
    testimony:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    postedOn: "August 18, 2023",
    ratings: 5,
  },
  {
    testifier: "James M",
    testimony:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    postedOn: "August 19, 2023",
    ratings: 5,
  },
];

export default function Component({ params }: Route.ComponentProps) {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const [activeTab, setActiveTab] = useState("ratings");
  const [productColor, setProductColor] = useState("color1");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedProductImgIndex, setSelectedProductImgIndex] = useState(0);
  const [quantityNeeded, setQuantityNeeded] = useState(1);
  const [showMore, setShowMore] = useState(4)

  const productThumbnails = [thumbnail1, thumbnail1, thumbnail2];
  const mainProductImages = [mainImg1, mainImg2, mainImg3];

const handleLoadMore = () => {
  setShowMore(testimonial.length);
  if(showMore === testimonial.length ) {
    setShowMore(4)
  }
}

  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col gap-14 py-14 pb-48 px-5 3xl:px-0 w-full max-w-[1400px]">
        {/* HEADEER */}
        <div>
          <div className="flex flex-col lg:flex-row gap-20 ">
            <div className="flex flex-col-reverse lg:flex-row item-stretch gap-4 lg:w-1/2">
              <div className="flex justify-between lg:flex-col gap-3 h-full ">
                {productThumbnails.map((img, index) => (
                  <div
                    key={index}
                    className={`${
                      index === selectedProductImgIndex
                        ? "border border-black rounded-2xl h-auto"
                        : ""
                    }`}
                  >
                    <img
                      src={img}
                      className="w-full h-full cursor-pointer"
                      onClick={() => setSelectedProductImgIndex(index)}
                      alt="img_thumbnail"
                    />
                  </div>
                ))}
              </div>
              <div className="relative w-full rounded-[20px] flex justify-center items-center">
                <img src={mainProductImages[selectedProductImgIndex]} className="w-full object-cover min-h-full max-h-[600px] rounded-[20px]" alt="main_image" />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col divide-y-2 divide-black/10">
              <div className="w-full flex flex-col gap-4 pb-4">
                <h3 className="font-integral-bold text-2xl lg:text-[40px] ">
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
                    4.5<span className="text-black/40">/5</span>{" "}
                  </p>
                </div>
                {/*  */}
                <div className="flex gap-5 items-center">
                  <p className="font-satoshi-bold text-black text-2xl ">$260</p>
                  <p className="font-satoshi-bold line-through text-black/30 text-2xl ">
                    $300
                  </p>
                  <span className="rounded-full text-[12px] py-2 px-3 text-[#FF3333] bg-[#FF3333]/10 font-medium">
                    -40%
                  </span>
                </div>
                {/*  */}
                <p className="text-black/60 text-base">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>
              {/* second segment */}
              <div className="w-full flex flex-col gap-4 py-4 ">
                <p className="text-black/60 text-base">Select Colors</p>
                <div className="flex gap-3">
                  {["color1", "color2", "color3"].map((color, idx) => (
                    <div
                      onClick={() => setProductColor(color)}
                      className={`w-8 h-8 cursor-pointer flex justify-center items-center rounded-full ${
                        idx === 0
                          ? "bg-[#4F4631]"
                          : idx === 1
                          ? "bg-[#314F4A]"
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
              {/* third segment */}
              <div className="w-full flex flex-col gap-4 py-4">
                <p className="text-black/60 text-base">Choose Size</p>
                <div className="flex justify-between lg:justify-normal gap-3">
                  {["Small", "Medium", "Large", "X-Large"].map((size, idx) => (
                    <div
                      onClick={() => setSelectedSize(size)}
                      className={`cursor-pointer py-2 px-3 lg:px-8 flex justify-center items-center rounded-full hover:border hover:border-amber-200 lg:text-base font-satoshi-reg text-sm ${
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
              {/* fourth segment */}
              <div className="w-full flex flex-col gap-4 pt-4">
                <p className="text-black/60 text-base">Choose Size</p>
                <div className="flex gap-8 justify-between">
                  <div className="bg-white-50 text-black/60 rounded-full  flex justify-between items-center w-1/2 py-3 px-5 ">
                    <span>
                      <img
                        src={minusIcon}
                        className="w-4 h-4 cursor-pointer"
                        alt="minus_icon"
                        onClick={() => setQuantityNeeded((prev) => prev > 1 ? prev - 1 : prev)}
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
              <p className="py-3 text-sm lg:text-base cursor-pointer">
                Product Details
              </p>
            </div>
            <div
              onClick={() => setActiveTab("ratings")}
              className={`${
                activeTab === "ratings"
                  ? "border-b-2 border-black cursor-pointer text-black"
                  : "text-black/60"
              } w-full flex justify-center items-center `}
            >
              <p className="py-3 text-sm lg:text-base cursor-pointer">
                Rating & Reviews
              </p>
            </div>
            <div
              onClick={() => setActiveTab("faqs")}
              className={`${
                activeTab === "faqs"
                  ? "border-b-2 border-black cursor-pointer text-black"
                  : "text-black/60"
              } w-full flex justify-center items-center`}
            >
              <p className="py-3 text-sm lg:text-base cursor-pointer">FAQs</p>
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
                    <p className="text-black font-satoshi-bold lg:text-2xl">
                      All Reviews
                    </p>
                    <p className="text-black/60 text-[12px] lg:text-sm">
                      (451)
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className=" flex justify-center items-center px-3 py-2 w-10 h-10  rounded-full bg-white-50">
                      <img src={filterIcon} alt="filter_icon" />
                    </div>
                    <div
                      className={`py-2 px-5 w-32 hidden md:flex justify-between items-center rounded-full bg-white-50 text-black text-base font-satoshi-reg `}
                    >
                      Latest
                      <span>
                        <img src={dropdownArrow} alt="dropdown_icon" />
                      </span>
                    </div>
                    <div
                      className={`py-2 px-4 lg:px-8 flex justify-center items-center rounded-full bg-black text-white text-base font-satoshi-reg `}
                    >
                      Write a Review
                    </div>
                  </div>
                </div>
                <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonial.slice(0, showMore).map((item, index) => (
                    <Testimonial
                      key={index}
                      ratings={item.ratings}
                      testifier={item.testifier}
                      testimony={item.testimony}
                      variant="product"
                      date={item.postedOn}
                    />
                  ))}
                </div>
                <div className="flex items-center mt-10 justify-center">
                  <Button onClick={handleLoadMore} variant="bordered" text={showMore === 4 ? "Load More Reviews" : "Show Less"} />
                </div>
              </>
            ) : (
              <>HELLO FAQS</>
            )}
          </div>
        </div>

        {/* THIRD SECTION */}
        <CenteredText text="You Might Also Like" />
        <div className="flex gap-5 relative w-full overflow-x-scroll lg:overflow-x-auto lg:items-center lg:justify-between ">
          {similarToTaste.length > 0
            ? similarToTaste.map((item, index) => (
                <ProductCard
                  key={index}
                  imgSrc={item.image}
                  title={item.title}
                  rating={item.rating}
                  discount={item.discount}
                  price={item.price}
                />
              ))
            : "No new arrival products"}
        </div>
      </div>
    </div>
  );
}
