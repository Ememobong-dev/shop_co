import { Button } from "~/components/Button";
import type { Route } from "./+types/home";
import header_img from "../assets/images/header-img--cropped.jpg";
import versace from "../assets/svgs/versace.svg";
import zara from "../assets/svgs/zara.svg";
import gucci from "../assets/svgs/gucci.svg";
import prada from "../assets/svgs/prada.svg";
import calvin from "../assets/svgs/calvin.svg";
import line from "../assets/svgs/separation-line.svg";
import { CenteredText } from "~/components/CenteredHeaderText";
import newArrivals from "../assets/data/newArrival.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      {/* hero area */}
      <div className="h-full">
        <div className="bg-white-100 w-full flex gap-8 items-start">
          <div className="flex flex-col gap-5 w-1/2 px-32 py-32 ">
            <h2 className="font-integral-bold text-6xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className="text-base font-satoshi-reg text-black/60">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div>
              <Button text="Shop Now" />
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
                <img src={line} alt="partners_icon" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi-bold text-4xl">30,000+</h3>
                <p className="text-black/60 tetx-base font-satoshi-reg">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-amber-700 ">
            <div>
              <img
                src={header_img}
                className="w-full h-[700px] object-fill "
                alt="img"
              />
            </div>
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
      {/* Second area */}
      <div>
        <CenteredText text="New Arrivals" />
        <div>
          {newArrivals.


          }
          </div>
      </div>
    </div>
  );
}
