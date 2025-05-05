import { Button } from "~/components/Button";
import type { Route } from "./+types/home";
import header_img from "../assets/images/header-img--cropped.jpg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      {/* hero area */}
      <div className="h-screen">
        <div className="bg-white-100 w-full p-28 flex items-start h-full">
          <div className="flex flex-col gap-5 w-1/2 ">
            <h2 className="font-integral-bold text-7xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className="text-base font-satoshi-reg w-2/3 text-black/60">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div>
              <Button text="Shop Now" />
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="">
              <img
                src={header_img}
                className="w-full h-auto object-cover "
                alt="img"
              />
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
