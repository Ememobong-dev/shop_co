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
            <div>
              <h3 className="text-2xl font-satoshi-bold text-black">
                Order Summary
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p>Subtotal</p>
                  <p>$565</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Discount (-20%)</p>
                  <p>-$113</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Delivery Fee</p>
                  <p>$15</p>
                </div>
                <hr className="my-5 border-black/10" />

                <div className="flex justify-between items-center">
                  <p>Total</p>
                  <p>$467</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex gap-3 py-3 px-3 rounded-full bg-white">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
