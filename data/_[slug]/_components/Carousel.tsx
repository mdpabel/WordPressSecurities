'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Carousel = ({
  images,
}: {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <div className='aspect-w-3 aspect-h-2'>
            <Image
              className='rounded object-cover object-center'
              src={images[i].src}
              alt={images[i].src}
              width={images[i].height}
              height={images[i].width}
            />
          </div>
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb solution-page',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div className='aspect-w-2 aspect-h-1' key={index}>
          <Image
            className='rounded object-cover object-center'
            width={1200}
            height={500}
            alt={image?.alt}
            src={image.src}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
