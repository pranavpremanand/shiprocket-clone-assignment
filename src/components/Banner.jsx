import BannerBg from "./BannerBg";
import img1 from "../assets/home-slider-image-15-1.webp";
import img2 from "../assets/home-slider-image-12-1.webp";
import img3 from "../assets/home-slider-image-20.webp";
import img4 from "../assets/home-slider-image-27.webp";
import img5 from "../assets/home-slider-image-26-1.webp";
import img6 from "../assets/home-slider-image-19.webp";
import img7 from "../assets/home-slider-image-17.webp";
import img8 from "../assets/home-slider-image-18.webp";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 20000, easing: (t) => t };

const Banner = () => {
  const [sliderRef1] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    vertical: true,
    slides: {
      origin: "center",
      perView: 3.5,
      spacing: 0,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          origin: "center",
          perView: 6,
          spacing: 0,
        },
      },
      "(max-width: 768px)": {
        vertical: false,
        slides: {
          origin: "center",
          perView: 4,
          spacing: 0,
        },
      },
      "(max-width: 650px)": {
        vertical: false,
        slides: {
          origin: "center",
          perView: 3,
          spacing: 0,
        },
      },
      "(max-width: 450px)": {
        vertical: false,
        slides: {
          origin: "center",
          perView: 2,
          spacing: 0,
        },
      },
    },
  });
  const [sliderRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    vertical: true,
    rtl: true,
    slides: {
      origin: "center",
      perView: 3.5,
      spacing: 0,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          origin: "center",
          perView: 6,
          spacing: 0,
        },
      },
    },
  });

  return (
    <div className="banner relative w-full min-h-[100vh] md:h-[110vh]">
      <BannerBg />
      <div className="wrapper w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 grid md:grid-cols-[55%_45%] gap-2">
        <div className="flex flex-col h-full justify-center gap-5">
          <h1 className="gradient-text text-7xl sm:text-[5rem] lg:text-[6.5rem] font-bold text-black leading-[4.5rem] md:leading-[6rem]">
            Ship your <br />
            dream
          </h1>
          <p className="text-xl max-w-[90%] md:max-w-[75%] leading-[2rem]">
            Create a delightful online journey by optimising your shipping
            process and everything surrounding it.
          </p>
          <button className="btn text-xl md:w-fit mt-4">
            Sign up for free
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:h-[110vh] md:-mt-24">
          <div
            ref={sliderRef1}
            className="keen-slider w-full whitespace-nowrap overflow-hidden h-fit md:h-full md:[mask-image:linear-gradient(to_top,transparent,white_20%,white_60%,transparent)]"
          >
            <img
              src={img1}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img2}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img3}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img4}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img1}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img2}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img3}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img4}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
          </div>
          <div
            ref={sliderRef2}
            className="hidden-slider keen-slider w-full whitespace-nowrap overflow-hidden h-full [mask-image:linear-gradient(to_top,transparent,white_20%,white_40%,transparent)]"
          >
            <img
              src={img5}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img6}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img7}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img8}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img5}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img6}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img7}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
            <img
              src={img8}
              alt=""
              className="keen-slider__slide w-auto md:w-[27rem] h-[16rem] md:h-fit object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
