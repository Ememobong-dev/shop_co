// import { useLoaderData } from "@react-router/react";
import { useLoaderData } from "react-router";
import type { Route } from "./+types/product-details";
import thumbnail1 from "../../assets/svgs/product-detail-svg/thumbnail1.svg";
import thumbnail2 from "../../assets/svgs/product-detail-svg/thumbnail2.svg";
import mainProductImg from "../../assets/svgs/product-detail-svg/mainProductImg.svg";

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

export default function Component({ params }: Route.ComponentProps) {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const productImages = [thumbnail1, thumbnail1, thumbnail2];

  return (
    <>
      <div className="relative flex flex-col gap-14 py-14 pb-48 px-5 md:px-14 3xl:px-32">
        <div>
          <div className="flex">
            <div className="flex item-start gap-3 ">
              <div className="flex flex-col gap-3">
                {productImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt="img_thumbnail" />
                  </div>
                ))}
              </div>
              <div>
                <img src={mainProductImg} alt="main_image" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
