import brandLogo from "../../assets/svgs/brand-logo.svg";

export const    Footer = () => {
  return (
    <div>
      <div className="bg-white-50 py-14 px-5 lg:px-32">
        <div className="flex flex-wrap gap-5 justify-between items-start">
          <div className="w-[300px]">
            <span>
              <img src={brandLogo} alt="brand_logo" />
            </span>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          </div>
          <div>
            <h3>Company</h3>
            <div className="flex flex-col gap-5">
              <p>About</p>
              <p>About</p>
              <p>About</p>
              <p>About</p>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <div className="flex flex-col gap-5">
              <p>About</p>
              <p>About</p>
              <p>About</p>
              <p>About</p>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <div className="flex flex-col gap-5">
              <p>About</p>
              <p>About</p>
              <p>About</p>
              <p>About</p>
            </div>
          </div>
          <div>
            <h3>Company</h3>
            <div className="flex flex-col gap-5">
              <p>About</p>
              <p>About</p>
              <p>About</p>
              <p>About</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
