import brandLogo from "../assets/svgs/brand-logo.svg";
import dropdownArrow from "../assets/svgs/dropdownArrow.svg";
import searchIcon from "../assets/svgs/search-brown-icon.svg";
import cartIcon from "../assets/svgs/black-cart.svg";
import profileIcon from "../assets/svgs/black-profile.svg";

export const Navbar = () => {
  return (
    <div className="w-full py-10 px-14 3xl:px-32  ">
      <div className="flex justify-between items-center">
        <span>
          <img src={brandLogo} alt="brand_logo" />
        </span>
        <div className="flex gap-3 font-satoshi-reg text-base items-center">
          <div className="flex gap-1 items-center">
            <p>Shop</p>
            <span>
              <img src={dropdownArrow} alt="brand_logo" />
            </span>
          </div>
          <span>
            <p>On Sale</p>
          </span>
          <span>
            <p>New Arrivals</p>
          </span>
          <span>
            <p>Brands</p>
          </span>
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
            <img src={cartIcon} alt="brand_logo" />
          </span>
          <span>
            <img src={profileIcon} alt="brand_logo" />
          </span>
        </div>
      </div>
    </div>
  );
};
