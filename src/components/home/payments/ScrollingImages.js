import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './VerticalCarousel.css';

const VerticalCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div className=" w-full">
        <img
          className="d-block mx-auto img-fluid !object-cover"
          src="/images/slider-img-1.jpg"
          style={{ height: "100%" }}
          alt="Image 1"
        />
      </div>
      <div className="">
        <img
          className="d-block mx-auto img-fluid !object-cover"
          src="/images/slider-img-2.jpg"
          alt="Image 2"
        />
      </div>
      <div className="">
        <img
          className="d-block mx-auto img-fluid !object-cover"
          src="/images/slider-img-3.jpg"
          alt="Image 3"
        />
      </div>
      <div className="">
        <img
          className="d-block mx-auto img-fluid object-cover"
          src="/images/slider-img-4.jpg"
          alt="Image 2"
        />
      </div>
      <div className="">
        <img
          className="d-block mx-auto img-fluid object-cover"
          src="/images/slider-img-5.jpg"
          alt="Image 3"
        />
      </div>
      <div className="">
        <img
          className="d-block mx-auto img-fluid object-cover"
          src="/images/slider-img-6.jpg"
          alt="Image 3"
        />
      </div>
      <div className="">
        <img
          className="d-block mx-auto img-fluid object-cover"
          src="/images/guidance-for-right-decision.jpg"
          alt="Image 3"
        />
      </div>
      <div className="">
        <img
          className="d-block mx-auto img-fluid object-cover"
          src="/images/24-hours-help.jpg"
          alt="Image 3"
        />
      </div>
      <div className="">
        <img
          className="d-block mx-auto img-fluid object-cover"
          src="/images/experts-advice.jpg"
          alt="Image 3"
        />
      </div>
      {/* Add more carousel items as needed */}
    </Slider>
  );
};

export default VerticalCarousel;
