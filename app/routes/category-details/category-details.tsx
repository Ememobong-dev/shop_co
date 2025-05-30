// import { useLoaderData } from "@react-router/react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/category-details";
import dropdownArrow from "../../assets/svgs/dropdownArrow.svg";
import casualCategory from "../../assets/data/casualCategory.json";
import { ProductCard } from "~/components/product-card/ProductCard";

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
      <div className="flex gap-5  ">
        <div className="w-[25%] border border-black/10 rounded-3xl py-5 px-6 divide-y divide-black/10">
        {/* Filter */}
          <div>

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
