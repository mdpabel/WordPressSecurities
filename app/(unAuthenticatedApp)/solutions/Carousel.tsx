"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = ({
  images,
}: {
  images: {
    src: string;
    alt: string;
  }[];
}) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            src={images[i].src}
            alt={images[i].src}
            width={200}
            height={200}
          />
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
          <Image width={1200} height={500} alt={image?.alt} src={image.src} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
