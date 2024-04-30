'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PortfolioProps } from './RecentWorks';
import ContentfulImage from './ContentfulImage';
import '@/styles/recentWorks.scss';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';

const Portfolio = ({ portfolio }: PortfolioProps) => {
  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
  };

  const recentWorks = portfolio?.map((p) => {
    if ('fields' in p) {
      const image = p.fields.image;
      if ('fields' in image) {
        return {
          title: p.fields.title,
          description: p.fields.description,
          img: {
            src: image.fields?.file?.url,
            height: image?.fields?.file?.details?.image?.height,
            width: image?.fields?.file?.details?.image?.width,
            alt: image?.fields?.title,
          },
        };
      }
    }
  });

  return (
    <Slider {...settings} className='w-full grid grid-cols-1'>
      {recentWorks.map((work, index) => (
        <div key={index} className='relative group'>
          <ContentfulImage
            src={work?.img.src}
            width={work?.img?.width}
            height={work?.img?.height}
          />

          <div
            className={cn(
              'absolute top-1/2 left-1/2 z-50  -translate-x-1/2 -translate-y-1/2 text-white group-hover:opacity-100 opacity-0 transition-all duration-500 cursor-pointer space-y-2',
            )}>
            <h2>{work?.title}</h2>
            <Button className='h-0 py-3 flex justify-center items-center text-sm bg-gray-300 text-black shadow'>
              View Case Study
            </Button>
          </div>
          <div className='group-hover:bg-black absolute top-0 left-0 right-0 bottom-0 opacity-60 transition-all duration-500 cursor-pointer'></div>
        </div>
      ))}

      {recentWorks.map((work, index) => (
        <div key={index} className='relative group'>
          <ContentfulImage
            src={work?.img.src}
            width={work?.img?.width}
            height={work?.img?.height}
            className='object-contain'
          />
          <div
            className={cn(
              'absolute top-1/2 left-1/2 z-50  -translate-x-1/2 -translate-y-1/2 text-white group-hover:opacity-100 opacity-0 transition-all duration-500 cursor-pointer space-y-2',
            )}>
            <h2>{work?.title}</h2>
            <Button className='h-0 py-3 flex justify-center items-center text-sm bg-gray-300 text-black shadow'>
              View Case Study
            </Button>
          </div>
          <div className='group-hover:bg-black absolute top-0 left-0 right-0 bottom-0 opacity-60 transition-all duration-500 cursor-pointer'></div>
        </div>
      ))}
    </Slider>
  );
};

export default Portfolio;
