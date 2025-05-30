// import { useLoaderData } from "@react-router/react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/category-details";
import dropdownArrow from "../../assets/svgs/dropdownArrow.svg";

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

  return (
    <div className="py-14 pb-48 px-5 md:px-14 3xl:px-32 w-full">
      <div className="flex  ">
        <div className="w-[30%] bg-pink-300"></div>
        <div className="w-[70%]">
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
        </div>
      </div>
    </div>
  );
}
