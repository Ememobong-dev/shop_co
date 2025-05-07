import brandLogo from "../../assets/svgs/brand-logo.svg";

export const Footer = () => {
  return (
    <div>
      <div className="bg-white-50 px-32">
        <div className="flex justify-between items-start">
          <div>
            <span>
              <img src={brandLogo} alt="brand_logo" />
            </span>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
