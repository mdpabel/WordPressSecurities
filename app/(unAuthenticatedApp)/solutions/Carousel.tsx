"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = ["/test/1.jpg", "test/2.jpg", "/test/3.jpg"];

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={images[i]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb solution-page",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div className="w-full h-52 md:h-96 object-contain" key={index}>
          <img src={image} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
