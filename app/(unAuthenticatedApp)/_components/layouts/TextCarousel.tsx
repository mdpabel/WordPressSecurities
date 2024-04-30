'use client';
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'));
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { hackStaticsData } from '@/data/hackStaticsData';

const TextCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
    fade: true,
  };

  return (
    <div
      style={{
        width: '500px',
        overflow: 'hidden',
      }}>
      <Slider {...settings}>
        {hackStaticsData.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </Slider>
    </div>
  );
};

export default TextCarousel;
