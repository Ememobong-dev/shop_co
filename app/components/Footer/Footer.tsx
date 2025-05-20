import brandLogo from "../../assets/svgs/brand-logo.svg";
import twitter from "../../assets/svgs/twitter.svg";
import instagram from "../../assets/svgs/instagram.svg";
import facebook from "../../assets/svgs/facbook.svg";
import github from "../../assets/svgs/github.svg";
import { SubscribeArea } from "../subscribeArea/subscribeArea";

export const Footer = () => {
  return (
    <div>
      <div className="bg-white-50 py-14 px-5 lg:px-32 relative ">
         <div className=" absolute -top-20">
          <SubscribeArea />
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start pt-20">
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
        <div className="flex justify-between items-center">
          <p className="text-black/60">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div>
            <span>
              <img  />
            </span>
          </div>
        </div>
       
      </div>
    </div>
  );
};
