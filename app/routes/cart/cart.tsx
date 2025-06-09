import React from "react";
import cartData from "../../assets/data/cartData.json";
import { CartSingleProduct } from "~/components/cart-component/cart-single-product";
import couponIcon from "../../assets/svgs/coupon-icon.svg";
import whiteArrow from "../../assets/svgs/white-arrow-right.svg";
import { Button } from "~/components/Button";

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
          <div className="w-[40%] flex flex-col gap-5 h-auto border border-black/10 rounded-3xl py-5 px-6 ">
            {/* <div > */}
            <h3 className="text-2xl font-satoshi-bold text-black">
              Order Summary
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-xl text-black/60 font-satoshi-reg">
                  Subtotal
                </p>
                <p className="font-satoshi-bold text-xl text-black">$565</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xl text-black/60 font-satoshi-reg">
                  Discount (-20%)
                </p>
                <p className="text-[#FF3333] font-satoshi-bold text-xl ">
                  -$113
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xl text-black/60 font-satoshi-reg">
                  Delivery Fee
                </p>
                <p className="font-satoshi-bold text-xl text-black">$15</p>
              </div>
              <hr className="border-black/10" />

              <div className="flex justify-between items-center">
                <p className="text-xl text-black font-satoshi-reg">Total</p>
                <p className="font-satoshi-bold text-2xl text-black">$467</p>
              </div>
              <div className="flex gap-3 mb-2">
                <div className="flex flex-auto gap-3 py-3 px-3 rounded-full bg-[#F0F0F0]">
                  <span>
                    <img src={couponIcon} alt="couponIcon" />
                  </span>
                  <input
                    className="bg-transparent focus:border-none focus:outline-0 placeholder-black/40 w-full text-sm"
                    placeholder="Add promo code"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <Button variant="filled" text="Apply" />
              </div>
              <Button
                variant="filled"
                size="md"
                fullWidth
                text="Go to Checkout"
                icon={whiteArrow}
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
