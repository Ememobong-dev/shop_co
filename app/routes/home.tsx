import { Button } from "~/components/Button";
import type { Route } from "./+types/home";
import header_img from "../assets/images/header-img--cropped.jpg";
import versace from "../assets/svgs/versace.svg";
import zara from "../assets/svgs/zara.svg";
import gucci from "../assets/svgs/gucci.svg";
import prada from "../assets/svgs/prada.svg";
import calvin from "../assets/svgs/calvin.svg";
import grid1 from "../assets/svgs/grid1.svg";
import grid2 from "../assets/svgs/grid2.svg";
import grid3 from "../assets/svgs/grid3.svg";
import grid4 from "../assets/svgs/grid4.svg";
import arrowLeft from "../assets/svgs/arrow-left.svg";
import arrowRight from "../assets/svgs/arrow-right.svg";
import line from "../assets/svgs/separation-line.svg";
import { CenteredText } from "~/components/CenteredHeaderText";
import newArrivals from "../assets/data/newArrival.json";
import topSelling from "../assets/data/topSelling.json";
import smallStar from "../assets/svgs/small-star.svg";
import bigStar from "../assets/svgs/big-star.svg";
import { Footer } from "~/components/Footer/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
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
      "inding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    ratings: 5,
  },
  {
    testifier: "James L",
    testimony:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    ratings: 5,
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
    ratings: 3.5,
  },
  {
    testifier: "James M",
    testimony:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    ratings: 5,
  },
];

const actualPriceFn = ({price, discount}: {price: number; discount: number}) => {
  let discountPrice = (discount/100) * price;
  return price - discountPrice;
}

export default function Home() {
  return (
    <div>
      {/* hero area */}
      <div className="h-full">
        <div className="bg-white-100 w-full flex gap-8 items-stretch">
          <div className="flex flex-col min-h-full gap-5 w-1/2 px-14 3xl:px-32 py-32 ">
            <h2 className="font-integral-bold text-6xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className="text-base font-satoshi-reg text-black/60">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div>
              <Button variant="filled" text="Shop Now" />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi-bold text-4xl"> 200+</h3>
                <p className="text-black/60 tetx-base font-satoshi-reg">
                  International Brands
                </p>
              </div>
              <span>
                <img src={line} alt="partners_icon" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi-bold text-4xl"> 2,000+</h3>
                <p className="text-black/60 tetx-base font-satoshi-reg">
                  High-Quality Products
                </p>
              </div>
              <span>
                <img src={line} alt="line_icon" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi-bold text-4xl">30,000+</h3>
                <p className="text-black/60 tetx-base font-satoshi-reg">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2  min-h-full relative ">
            <div className="max-h-[700px] h-[700px]">
              <img src={header_img} className="w-full h-full" />
            </div>
            <span className="absolute top-[35%]">
              <img src={smallStar} alt="partnestar_iconstrs_icon" />
            </span>
            <span className="absolute top-[15%] right-[10%]">
              <img src={bigStar} alt="partnestar_iconstrs_icon" />
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center bg-black py-14 px-32">
          <span>
            <img src={versace} alt="partners_icon" />
          </span>
          <span>
            <img src={zara} alt="partners_icon" />
          </span>
          <span>
            <img src={gucci} alt="partners_icon" />
          </span>
          <span>
            <img src={prada} alt="partners_icon" />
          </span>
          <span>
            <img src={calvin} alt="partners_icon" />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-14 py-14 px-14 3xl:px-32">
        {/* Second area */}
        <div>
          <CenteredText text="New Arrivals" />
          <div className="flex justify-between mt-10">
            {newArrivals.map((item, index) => (
              <div key={index} className="flex flex-col gap-5">
                <img src={item.image} />
                <div className="flex flex-col gap-3">
                  <p className="font-satoshi-bold text-lg"> {item.title.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} </p>
                  <div>
                    {item.discount > 0 ? (
                      <div className="flex gap-5 items-center">
                        <p className="font-satoshi-bold text-black text-xl"> ${actualPriceFn({price: item.price, discount: item.discount})} </p>
                        <p className="font-satoshi-bold line-through text-black/40 text-xl"> ${item.price}</p>
                        <span className="rounded-full text-[12px] py-2 px-3 text-[#FF3333] bg-[#FF3333]/10 font-medium"> - {item.discount} %</span>
                      </div>
                    ) : <div> <p className="font-satoshi-bold text-black text-xl"> ${item.price} </p> </div>
                      
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="bordered" text="View All" />
          </div>
        </div>
        <hr />
        {/* third area */}
        <div>
          <CenteredText text="New Arrivals" />
          <div className="flex justify-between mt-10">
            {topSelling.map((item, index) => (
              <div key={index}>
                <img src={item.image} />
                <div>
                  <p> {item.title} </p>
                  <p> {item.price} </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="bordered" text="View All" />
          </div>
        </div>
        {/* fourth */}
        <div className="bg-white-50 rounded-[40px] p-20">
          <h3 className="text-5xl mb-16 font-integral-bold text-center">
            BROWSE BY DRESS STYLE
          </h3>
          <div className="flex justify-center gap-6 items-stretch w-full">
            <img src={grid1} className="" alt="grid_img" />
            <img src={grid2} alt="grid_img" />
          </div>
          <div className="flex mt-6  gap-6 justify-center items-stretch w-full">
            <img src={grid3} className="" alt="grid_img" />
            <img src={grid4} className="" alt="grid_img" />
          </div>
        </div>

        {/* fifth -- testimonials */}
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-5xl mb-16 font-integral-bold ">
              OUR HAPPY CUSTOMERS
            </h3>
            <div className="flex gap-2">
              <span>
                <img src={arrowLeft} alt="arrow" />
              </span>
              <span>
                <img src={arrowRight} alt="arrow" />
              </span>
            </div>
          </div>

          <div className="flex gap-5 overflow-x-scroll w-full">
            {testimonial.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg !w-[500px] h-[250px] border-black/10 p-7 shrink-0"
              >
                <p> {item.testifier} </p>
                <p> "{item.testimony}" </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
