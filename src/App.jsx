import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import img1 from "./assets/brand-logo-home-rv-1.png";
import img2 from "./assets/brand-logo-home-rv-2.png";
import img3 from "./assets/brand-logo-home-rv-3.png";
import img4 from "./assets/brand-logo-home-rv-4.png";
import img5 from "./assets/brand-logo-home-rv-5.png";
import img6 from "./assets/brand-logo-home-rv-6.png";
import img7 from "./assets/brand-logo-home-rv-7.png";
import img8 from "./assets/brand-logo-home-rv-8.png";
import img9 from "./assets/brand-logo-home-rv-9.png";
import img10 from "./assets/home-A-trusted-growth-partner-rv.webp";
import img11 from "./assets/courier-selection-sr-home-64b8d7e19d8f9.webp";
import img12 from "./assets/shipping-rv-2 (1).webp";
import img13 from "./assets/shipping-rv-1.webp";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdArrowOutward,
} from "react-icons/md";
import speakerImg from "./assets/speaker.png";
import srxSvg from "./assets/SRX-1.svg";
import shipX from "./assets/shipX.svg";
import cargoX from "./assets/cargoX.svg";
import launchX from "./assets/launchX.svg";
import Progressbar from "./components/Progressbar";
import { useRef, useState } from "react";
import img14 from "./assets/launchx.webp";
import img15 from "./assets/cX.png";
import img16 from "./assets/shipx.webp";
import { useKeenSlider } from "keen-slider/react";
import img17 from "./assets/delight-2img.webp";
import img18 from "./assets/delight-2-1.webp";
import img19 from "./assets/delight-4-1.webp";
import img20 from "./assets/delight-3-1.webp";

function App() {
  const brandLogos = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [currentStep, setCurrentStep] = useState(0);
  const images = [img14, img15, img16];
  const Slider = useRef(null);

  let timeout;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      Slider.current?.next();
    }, 1500);
  }

  const [sliderRef] = useKeenSlider(
    {
      initial: 0.5,
      loop: false,
      slides: {
        origin: "center",
        perView: 2,
      },
      breakpoints: {
        "(max-width: 768px)": {
          slides: {
            origin: "auto",
            perView:1,
          },
          initial: 0.2,
        },
      },
    },
    [
      (slider) => {
        Slider.current = slider;

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="text-gray-700 bg-[#FEFFFF] overflow-hidden">
      <Header />
      <Banner />
      <section className="flex flex-col-reverse lg:flex-col gap-10 mt-10">
        <div className="animate-horizontally my-5 flex items-center gap-8 flex-nowrap">
          {brandLogos.concat(brandLogos).map((brandLogo, index) => (
            <div
              key={index}
              className="image-container w-[12rem] md:w-[16rem] hover:shadow-2xl transition-all duration-200 flex justify-center items-center flex-shrink-0 p-5 bg-white border border-primary/40 rounded-lg"
            >
              <img
                key={index}
                src={brandLogo}
                alt="brand-logo"
                className="h-[2rem] object-contain"
              />
            </div>
          ))}
        </div>
        <div className="wrapper">
          <div className="md:w-[80%] flex flex-col gap-5">
            <p className="text-primary mb-2 text-lg">
              A trusted growth partner
            </p>
            <h2 className="text-primaryText text-[3rem] md:text-[3.5rem] font-bold leading-[3rem] md:leading-[4rem]">
              Lakhs of eCommerce businesses chose
            </h2>
            <h2 className="gradient-text text-[3rem] md:text-[3.5rem] leading-[3rem] md:leading-[4rem]">
              <b>Shiprocket</b> to streamline their customer journey-from
              shipping to returns and beyond
            </h2>
          </div>
        </div>
      </section>

      <section className="mt-10 wrapper grid md:grid-cols-2 items-center gap-10">
        <div className="grid grid-cols-2 gap-[5.5rem]">
          <div className="flex flex-col gap-2 justify-between">
            <h3 className="text-[2.3rem] md:text-[2.8rem] text-primaryText font-medium">
              2.5 Lakh+
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-2xl">merchants nationwide</p>
              <div className="bg-gradient-to-r from-[#94F2AE] to-[#150dac] h-[.3rem]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <h3 className="text-[2.3rem] md:text-[2.8rem] text-primaryText font-medium">
              20 Crore
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-2xl">transactions every year</p>
              <div className="bg-gradient-to-r from-[#94F2AE] to-[#150dac] h-[.3rem]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <h3 className="text-[2.3rem] md:text-[2.8rem] text-primaryText font-medium">
              ₹ 30K Crore
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-2xl">annual GMV powered</p>
              <div className="bg-gradient-to-r from-[#94F2AE] to-[#150dac] h-[.3rem]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-between">
            <h3 className="text-[2.3rem] md:text-[2.8rem] text-primaryText font-medium">
              25 Crore
            </h3>
            <div className="flex flex-col gap-2">
              <p className="text-2xl">shipments delivered</p>
              <div className="bg-gradient-to-r from-[#94F2AE] to-[#150dac] h-[.3rem]"></div>
            </div>
          </div>
        </div>
        <img src={img10} alt="" className="hidden md:flex" />
      </section>

      <section className="mt-10 flex flex-col gap-14 relative">
        <div className="flex md:hidden my-6 absolute right-0 top-0 h-full w-5/6 bg-gradient-to-b from-[#DDF0FF] to-transparent rounded-ss-[10rem]"></div>
        <div className="my-20 wrapper z-10 w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-primaryText text-[3rem] md:text-[3.5rem] font-bold leading-[3rem] md:leading-[4rem]">
              Enhance your customer experience
            </h2>
            <h2 className="gradient-text text-[3rem] md:text-[3.5rem] leading-[3rem] md:leading-[4rem]">
              at every touch point
            </h2>
          </div>
          <div className="flex flex-col mt-10">
            <h2 className="text-[2rem] md:text-[3rem] w-fit bg-gradient-to-r from-[#5dfc8a] to-[#150dac] text-transparent bg-clip-text">
              Shipping
            </h2>
            <h2 className="text-[2rem] md:text-[3rem] w-fit">
              Keep things simple
            </h2>
          </div>
        </div>
      </section>

      <section className="wrapper">
        <div className="grid md:grid-cols-3 gap-9">
          <div className="p-7 flex flex-col justify-between gap-3 rounded-2xl bg-gradient-to-b from-[#ddf0ff38] to-[#E7F9FF]">
            <img src={img11} alt="" className="object-contain" />
            <h4 className="text-primaryText text-3xl font-medium">
              Domestic shipping
            </h4>
            <p className="text-xl">
              Manage all channels in a single view and reach nationwide
              efficiently with AI-based courier selection
            </p>
            <span className="text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
              Explore <MdArrowOutward className="text-2xl -mt-1" />
            </span>
          </div>
          <div className="p-7 flex flex-col justify-between gap-3 rounded-2xl bg-gradient-to-b from-[#ddf0ff38] to-[#E7F9FF]">
            <img src={img12} alt="" className="object-contain" />
            <h4 className="text-primaryText text-3xl font-medium">
              B2B shipping
            </h4>
            <p className="text-xl">
              Lower your B2B and cargo shipping costs by upto 40%
            </p>
            <span className="text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
              Explore <MdArrowOutward className="text-2xl -mt-1" />
            </span>
          </div>
          <div className="p-7 flex flex-col justify-between gap-3 rounded-2xl bg-gradient-to-b from-[#ddf0ff38] to-[#E7F9FF]">
            <img src={img13} alt="" className="object-contain" />
            <h4 className="text-primaryText text-3xl font-medium">
              Hyperlocal delivery
            </h4>
            <p className="text-xl">
              Make intra-city deliveries in hours with our experienced courier
              partners
            </p>
            <span className="text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
              Explore <MdArrowOutward className="text-2xl -mt-1" />
            </span>
          </div>
        </div>
        <div className="mt-12 bg-[#F4FDFF] md:flex hidden justify-center items-center gap-4 p-4 rounded-2xl border-2 border-[#A8E1F2]">
          <img src={speakerImg} className="w-8" alt="" />
          <p className="text-xl text-primaryText">
            Experience Shiprocket in real-time with our live demo.
            <b> Sign-up not required for demo</b>
          </p>
          <button className="btn flex items-center gap-2 shadow-2xl shadow-primary">
            Check Live Demo <MdArrowOutward className="text-2xl -mt-1" />
          </button>
        </div>
      </section>

      <section className="wrapper mt-10">
        <div className="flex flex-col">
          <h2 className="text-[2rem] md:text-[3rem] w-fit bg-gradient-to-r from-[#5dfc8a] to-[#150dac] text-transparent bg-clip-text">
            Exports
          </h2>
          <h2 className="text-[2rem] md:text-[3rem] w-fit">
            Grow beyond boundaries
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 my-14">
          <div className="flex flex-col gap-8">
            <img src={srxSvg} className="h-[3.5rem] w-fit" alt="" />

            <div
              className={`${
                currentStep !== 0 && "md:opacity-50"
              } flex flex-col gap-5 cursor-pointer`}
              onClick={() => setCurrentStep(0)}
            >
              <img src={shipX} className="h-[2.5rem] w-fit" alt="" />
              <p className="text-xl">
                Ship your orders to over 220+ countries and territories with
                India’s leading cross border shipping solution
              </p>
              <span className="mb-4 text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
                Explore <MdArrowOutward className="text-2xl -mt-1" />
              </span>
              <div className="hidden md:flex">
                <Progressbar
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  step={0}
                />
              </div>
            </div>

            <div
              className={`${
                currentStep !== 1 && "md:opacity-50"
              } flex flex-col gap-5 cursor-pointer`}
              onClick={() => setCurrentStep(1)}
            >
              <img src={cargoX} className="h-[2.5rem] w-fit" alt="" />
              <p className="text-xl">
                Access transparent door-to-door B2B deliveries via air from
                India to anywhere with no weight restrictions
              </p>
              <span className="mb-4 text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
                Explore <MdArrowOutward className="text-2xl -mt-1" />
              </span>
              <div className="hidden md:flex">
                <Progressbar
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  step={1}
                />
              </div>
            </div>

            <div
              className={`${
                currentStep !== 2 && "md:opacity-50"
              } flex flex-col gap-5 cursor-pointer`}
              onClick={() => setCurrentStep(2)}
            >
              <img src={launchX} className="h-[2.5rem] w-fit" alt="" />
              <p className="text-xl">
                Take your brand global and start selling to international
                customers with minimum investment risk
              </p>
              <span className="mb-4 text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
                Explore <MdArrowOutward className="text-2xl -mt-1" />
              </span>
              <div className="hidden md:flex">
                <Progressbar
                  currentStep={currentStep}
                  setCurrentStep={setCurrentStep}
                  step={2}
                />
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center rounded-2xl p-10 bg-gradient-to-br from-[#E2EAFD] via-[#D6FAD0] to-[#F8E5E8]">
            <img src={images[currentStep]} className="object-contain h-[30rem]" alt="" />
          </div>
        </div>
      </section>

      <section className="mt-5 mb-12 w-full">
          <div className="wrapper flex flex-col gap-5 sm:flex-row justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-[2rem] md:text-[3rem] w-fit bg-gradient-to-r from-[#5dfc8a] to-[#150dac] text-transparent bg-clip-text">
                Delight
              </h2>
              <h2 className="text-[2rem] md:text-[3rem] w-fit">
                Elevate customer experience
              </h2>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => Slider.current?.prev()}
                className="w-12 h-12 flex justify-center items-center text-xl shadow-top bg-white rounded-full"
              >
                <MdArrowBackIos className="-mr-1" />
              </button>
              <button
                onClick={() => Slider.current?.next()}
                className="w-12 h-12 flex justify-center items-center text-xl shadow-top bg-white rounded-full"
              >
                <MdArrowForwardIos className="-mr-1" />
              </button>
            </div>
          </div>
          <div ref={sliderRef} className="keen-slider mt-5 flex md:gap-10">
            <div className="w-fit keen-slider__slide p-7 flex flex-col justify-between gap-2 rounded-2xl bg-gradient-to-b from-[#fff9df68] to-[#FFF9DF]">
              <img src={img17} alt="" className="object-contain h-[45vh]" />
              <h4 className="text-primaryText text-3xl font-medium">
                Domestic shipping
              </h4>
              <p className="text-xl">
                Manage all channels in a single view and reach nationwide
                efficiently with AI-based courier selection
              </p>
              <span className="text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
                Explore <MdArrowOutward className="text-2xl -mt-1" />
              </span>
            </div>
            <div className="w-fit keen-slider__slide p-7 flex flex-col justify-between gap-2 rounded-2xl bg-gradient-to-b from-[#fff9df68] to-[#FFF9DF]">
              <img src={img18} alt="" className="object-contain h-[45vh]" />
              <h4 className="text-primaryText text-3xl font-medium">
                B2B shipping
              </h4>
              <p className="text-xl">
                Lower your B2B and cargo shipping costs by upto 40%
              </p>
              <span className="text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
                Explore <MdArrowOutward className="text-2xl -mt-1" />
              </span>
            </div>
            <div className="w-fit keen-slider__slide p-7 flex flex-col justify-between gap-2 rounded-2xl bg-gradient-to-b from-[#fff9df68] to-[#FFF9DF]">
              <img src={img19} alt="" className="object-contain h-[45vh]" />
              <h4 className="text-primaryText text-3xl font-medium">
                Hyperlocal delivery
              </h4>
              <p className="text-xl">
                Make intra-city deliveries in hours with our experienced courier
                partners
              </p>
              <span className="text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
                Explore <MdArrowOutward className="text-2xl -mt-1" />
              </span>
            </div>
            <div className="w-fit keen-slider__slide p-7 flex flex-col justify-between gap-2 rounded-2xl bg-gradient-to-b from-[#fff9df68] to-[#FFF9DF]">
              <img src={img20} alt="" className="object-contain h-[45vh]" />
              <h4 className="text-primaryText text-3xl font-medium">
                Hyperlocal delivery
              </h4>
              <p className="text-xl">
                Make intra-city deliveries in hours with our experienced courier
                partners
              </p>
              <span className="text-lg font-medium text-primary flex items-center cursor-pointer w-fit">
                Explore <MdArrowOutward className="text-2xl -mt-1" />
              </span>
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
