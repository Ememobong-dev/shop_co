import brandLogo from "../../assets/svgs/brand-logo.svg";
import twitter from "../../assets/svgs/twitter.svg";
import instagram from "../../assets/svgs/instagram.svg";
import facebook from "../../assets/svgs/facbook.svg";
import github from "../../assets/svgs/github.svg";
import visa from "../../assets/svgs/visa.svg";
import masterChef from "../../assets/svgs/masterChef.svg";
import payPal from "../../assets/svgs//paypal.svg";
import applePay from "../../assets/svgs/applePay.svg";
import googlePay from "../../assets/svgs/G-pay.svg";
import { SubscribeArea } from "../subscribeArea/subscribeArea";

export const Footer = () => {
  return (
    <>
      <div className="bg-white-50 py-14 px-5 md:px-14 3xl:px-32 relative ">

         <div className="flex justify-center w-full mb-20 ">
          <SubscribeArea />
        </div>
        <div className="flex flex-wrap gap-5  justify-between items-start">
          <div className="w-[300px] flex flex-col gap-5">
            <span>
              <img src={brandLogo} alt="brand_logo" />
            </span>
            <p className="text-black/60">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3">
              <span>
                <img src={twitter} alt="twitter" />
              </span>
              <span>
                <img src={facebook} alt="twitter" />
              </span>
              <span>
                <img src={instagram} alt="twitter" />
              </span>
              <span>
                <img src={github} alt="twitter" />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3>COMPANY</h3>
            <div className="flex flex-col gap-3">
              <p className="text-black/60 text-sm">About</p>
              <p className="text-black/60 text-sm">Features</p>
              <p className="text-black/60 text-sm">Works</p>
              <p className="text-black/60 text-sm">Career</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3>HELP</h3>
            <div className="flex flex-col gap-3">
              <p className="text-black/60 text-sm">Customer Support</p>
              <p className="text-black/60 text-sm">Delivery Details</p>
              <p className="text-black/60 text-sm">Terms & Conditions</p>
              <p className="text-black/60 text-sm">Privacy Policy </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3>FAQ</h3>
            <div className="flex flex-col gap-3">
              <p className="text-black/60 text-sm">Account</p>
              <p className="text-black/60 text-sm">Manage Deliveries</p>
              <p className="text-black/60 text-sm">Orders</p>
              <p className="text-black/60 text-sm">Payments</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3>RESOURCES</h3>
            <div className="flex flex-col gap-3">
              <p className="text-black/60 text-sm">Free eBooks</p>
              <p className="text-black/60 text-sm">Development Tutorial</p>
              <p className="text-black/60 text-sm">How to Blog</p>
              <p className="text-black/60 text-sm">Youtube Playlist</p>
            </div>
          </div>
        </div>
        <hr className="border-b my-5 border-black/10" />
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-black/60 text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-2">
             <span>
                <img className="w-full" src={visa} alt="twitter" />
              </span>
              <span>
                <img className="w-full" src={masterChef} alt="twitter" />
              </span>
              <span>
                <img className="w-full" src={payPal} alt="twitter" />
              </span>
              <span>
                <img className="w-full" src={applePay} alt="twitter" />
              </span>
              <span>
                <img className="w-full" src={googlePay} alt="twitter" />
              </span>
          </div>
        </div>
       
      </div>
    </>
  );
};
