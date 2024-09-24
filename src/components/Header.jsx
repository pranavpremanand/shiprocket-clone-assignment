import { useEffect, useState } from "react";
import Logo from "../assets/shiprocket_logo.svg";
import speakerImg from "../assets/speaker.png";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navOptions = [
    "Products",
    "Platform",
    "Pricing",
    "Partners",
    "Track Order",
    "Resources",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        // Change 100 to whatever scroll position you prefer
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="z-50 relative">
      <div className="h-14 hidden lg:flex justify-center items-center bg-gradient-to-r from-[#A89CF7] via-[#EACAEB] to-[#FBD7C1]">
        <div className="wrapper flex justify-center items-center gap-5">
          <p className="text-[#09074F] flex items-center gap-2 text-sm">
            <img src={speakerImg} className="w-7" alt="" />
            Recharge Now for <b>₹1000</b> & Get <b>₹1600*</b> In Your Wallet.
            Use Code:
            <b>FLAT600</b> | Limited Period Offer On First Recharge
          </p>
          <div className="flex items-center gap-2">
            <p className="underline">*T&C Apply.</p>
            <button className="p-2 text-sm bg-white text-black border border-black rounded-md">
              Signup Now
            </button>
          </div>
        </div>
      </div>
      <div
        className={`z-40 fixed w-full left-0 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 py-4 backdrop-blur-sm top-0 border-b border-primary/20"
            : "bg-transparent py-2 top-0 lg:top-14"
        }`}
      >
        <div className="wrapper">
          <div className="flex gap-5 justify-between items-center">
            <img
              src={Logo}
              alt="logo"
              className={`max-w-[10rem] lg:max-w-[14rem] transition-all duration-300 ${
                isScrolled && "max-w-[9rem] lg:max-w-[13rem]"
              }`}
            />
            <div className="hidden lg:flex gap-6 z-30">
              {navOptions.map((option) => (
                <p
                  className="text-gray-700 hover:text-black cursor-pointer transition-colors duration-100"
                  key={option}
                >
                  {option}
                </p>
              ))}
              <p className="text-primary font-medium cursor-pointer">Quick</p>
            </div>
            <div className="flex gap-4 items-center">
              <button className="btn lg:hidden">Try for Free</button>
              <RiMenu3Fill className="lg:hidden text-[#09074f] text-4xl" />
            </div>
            <div className="hidden lg:flex gap-6 items-center">
              <p className="cursor-pointer">Log In</p>
              <button className="btn">Try for Free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
