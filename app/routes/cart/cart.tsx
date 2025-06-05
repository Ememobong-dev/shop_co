import React from "react";
import cartData from "../../assets/data/cartData.json";
import { CartSingleProduct } from "~/components/cart-component/cart-single-product";
const Cart = () => {
  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col gap-14 py-14 pb-48 px-5 3xl:px-0 w-full max-w-[1400px]">
        <h2 className="font-integral-bold text-2xl lg:text-4xl">Your cart</h2>
        <div className="flex items-start gap-8">
          <div className="w-[60%] flex flex-col gap-5 h-auto border border-black/10 rounded-3xl py-5 px-6">
            <div className="w-full flex flex-col gap-4 ">
              {cartData.map((item, idx) => (
                <>
                  <CartSingleProduct
                    size={item.Size}
                    productName={item.name}
                    color={item.color}
                    productPrice={item.price}
                    key={idx}
                    imgSrc={item.image}
                  />
                  <hr className="my-5 border-black/10" />
                </>
              ))}
            </div>
          </div>
          <div className="w-[40%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
