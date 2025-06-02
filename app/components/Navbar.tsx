import brandLogo from "../assets/svgs/brand-logo.svg";
import dropdownArrow from "../assets/svgs/dropdownArrow.svg";
import searchIcon from "../assets/svgs/search-brown-icon.svg";
import cartIcon from "../assets/svgs/black-cart.svg";
import profileIcon from "../assets/svgs/black-profile.svg";
import searchIconForMobile from "../assets/svgs/mobile-nav-search-icon.svg";
import hamburger from "../assets/svgs/hamburger.svg";
import { useState } from "react";
import cancelIcon from "app/assets/svgs/cancel-white.svg";
import { Link } from "react-router";
import arrowUp from "../assets/svgs/arrow-up.svg";
import { Drawer } from "./Drawer/Drawer";

export const Navbar = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [shopDropdown, setShopDropdown] = useState(false);
  const [multipleDropdown, setMultipleDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const handleMobileHamburger = () => {
    console.log("Hamburger clicked");
    setDrawerOpened(true);
  };

  return (
    <div className="w-full py-5 md:py-10 px-5 md:px-14 3xl:px-32">
      <div className="justify-between items-center hidden lg:flex">
        <Link to={"/"}>
          <img className="cursor-pointer" src={brandLogo} alt="brand_logo" />
        </Link>
        <div className="flex relative gap-8 font-satoshi-reg text-base items-center">
          <div
            className=" cursor-pointer flex gap-1 items-center"
            onMouseOver={() => setShopDropdown(true)}
            onMouseOut={() => setShopDropdown(false)}
          >
            <p>Shop</p>
            <span>
              <img
                src={shopDropdown ? arrowUp : dropdownArrow}
                alt="brand_logo"
              />
            </span>
          </div>
          <div
            className=" cursor-pointer flex gap-1 items-center"
            onMouseOver={() => setMultipleDropdown(true)}
            onMouseOut={() => setMultipleDropdown(false)}
          >
            <p>Multiple Dropdown</p>
            <span>
              <img
                src={multipleDropdown ? arrowUp : dropdownArrow}
                alt="brand_logo"
              />
            </span>
          </div>
          <span>
            <p className="cursor-pointer">On Sale</p>
          </span>
          <span>
            <p className="cursor-pointer">New Arrivals</p>
          </span>
          <span>
            <p className="cursor-pointer">Brands</p>
          </span>

          {/* DROPDOWNS */}
          {shopDropdown && (
            // <div className=" ">
            <div className="rounded-xl absolute top-8 bg-amber-200 p-4 z-50">
              <div className=" flex text-black flex-col gap-4">
                <span>
                  <p>Shop Outlet 1</p>
                </span>
                <span>
                  <p>Shop Outlet 2</p>
                </span>
                <span>
                  <p>Shop Outlet 3</p>
                </span>
                <span>
                  <p>Shop Outlet 4</p>
                </span>
                <span>
                  <p>Shop Outlet 5</p>
                </span>
              </div>
            </div>
            // </div>
          )}

          {/*MULTIPLE DROPDOWNS */}
          {multipleDropdown && (
            // <div className=" ">
            <div className="transition-all duration-300 ease-in-out origin-top opacity-100 scale-100 rounded-xl absolute top-8 bg-amber-200  z-50">
              <div className="flex justify-between p-4 w-full text-black">
                <div>
                  <button className="bg-amber-900 text-white py-2 px-8 rounded-lg flex justify-center items-center">
                    Headquaters
                  </button>
                  <div className="flex flex-col gap-4 mt-6 ">
                    <span>
                      <p>Ikorodu(yes I said so)</p>
                    </span>
                    <span>
                      <p>Ikeja</p>
                    </span>
                    <span>
                      <p>Sango</p>
                    </span>
                    <span>
                      <p>Eleyele</p>
                    </span>
                    <span>
                      <p>Nothing for Moniya and Agbowo people</p>
                    </span>
                  </div>
                </div>
                <div>
                  <button className="bg-amber-900 text-white py-2 px-8 rounded-lg flex justify-center items-center">
                    Made in Locations
                  </button>
                  <div className="flex flex-col gap-4 mt-6 ">
                    <span>
                      <p>China</p>
                    </span>
                    <span>
                      <p>Italy</p>
                    </span>
                    <span>
                      <p>Nigeria</p>
                    </span>
                    <span>
                      <p>Japan</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            // </div>
          )}
        </div>
        <div className="flex gap-3 w-1/2 bg-white-50 px-4 py-3 rounded-full">
          <span>
            <img src={searchIcon} alt="brand_logo" />
          </span>
          <input
            className="bg-transparent border-0 focus:border-0 outline-0"
            type="text"
            placeholder="Search for products..."
          />
        </div>
        <div className="flex gap-4">
          <span>
            <img className="cursor-pointer" src={cartIcon} alt="brand_logo" />
          </span>
          <span>
            <img
              className="cursor-pointer"
              src={profileIcon}
              alt="brand_logo"
            />
          </span>
        </div>
      </div>
      {/* MOBILE NAV */}
      <div className="flex justify-between items-center lg:hidden">
        <div className="flex gap-3 items-center">
          <span>
            <img
              onClick={handleMobileHamburger}
              src={hamburger}
              className=""
              alt="brand_logo"
            />
          </span>
          <span>
            <img src={brandLogo} className="w-1/2" alt="brand_logo" />
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span>
            <img src={searchIconForMobile} alt="brand_logo" />
          </span>
          <span>
            <img src={cartIcon} alt="brand_logo" />
          </span>
          <span>
            <img src={profileIcon} alt="brand_logo" />
          </span>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {drawerOpened && (
        <Drawer
          open={drawerOpened}
          onCancel={() => setDrawerOpened(false)}
          drawerPosition="top"
          width={80}
          className="divide-y w-[80%] divide-black/10"
        >
          <div>
            <div className="flex justify-end">
              <button
                onClick={() => setDrawerOpened(false)}
                className="flex justify-center items-center py-2 px-4 rounded-lg bg-black/70 mb-6"
              >
                <img
                  src={cancelIcon}
                  className="cursor-pointer"
                  alt="cancel_icon"
                />
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p
                  onClick={() => {
                    setActiveTab("Home");
                    setDrawerOpened(false);
                  }}
                  className={` ${
                    activeTab === "Home"
                      ? "font-bold text-2xl text-blue-300"
                      : "text-lg text-black font-normal"
                  }`}
                >
                  HOME
                </p>
              </div>
              <div>
                <p
                  onClick={() => {
                    setActiveTab("Cart");
                    setDrawerOpened(false);
                  }}
                  className={` ${
                    activeTab === "Cart"
                      ? "font-bold text-2xl text-blue-300"
                      : "text-lg text-black font-normal"
                  }`}
                >
                  CART
                </p>
              </div>
              <div>
                <p
                  onClick={() => {
                    setActiveTab("Profile");
                    setDrawerOpened(false);
                  }}
                  className={` ${
                    activeTab === "Profile"
                      ? "font-bold text-2xl text-blue-300"
                      : "text-lg text-black font-normal"
                  }`}
                >
                  Profile
                </p>
              </div>
            </div>
          </div>
        </Drawer>
      )}
    </div>
  );
};
