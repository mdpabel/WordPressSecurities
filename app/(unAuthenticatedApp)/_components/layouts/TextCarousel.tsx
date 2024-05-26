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
        userSelect: 'text',
      }}
      className='flex items-center w-[500px] h-10 overflow-hidden'>
      <Slider className='top-notification' {...settings}>
        {hackStaticsData.map((text, index) => (
          <li className='line-clamp-1' key={index}>
            {text}
          </li>
        ))}
      </Slider>
    </div>
  );
};

export default TextCarousel;
