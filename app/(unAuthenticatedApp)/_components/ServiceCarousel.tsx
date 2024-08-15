'use client';
import React, { ReactNode, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TitleWithBottomBorder } from '@/components/Title';
import { cn } from '@/lib/utils';
import { Button } from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

type PropTypes = {
  services: {
    id: string;
    pricingTableId: string[];
    imgUrl: string;
    imgWidth: number | undefined;
    imgHeight: number | undefined;
    title: string;
    description: string;
    slug: string;
  }[];
};

type services = {
  id: number;
  imgUrl: string;
  imgWidth: number | undefined;
  imgHeight: number | undefined;
  title: string;
  description: string;
  slug: string;
};

const services: services[] = [
  {
    id: 1,
    title: 'Fix your hacked site',
    description:
      "Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers. Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers. ",
    imgHeight: 700,
    imgUrl: '/hero.png',
    imgWidth: 700,
    slug: '/solutions/malware-removal',
  },

  {
    id: 2,
    title: 'Website maintenance',
    description:
      "Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers. Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers.",
    imgHeight: 700,
    imgUrl: '/hero/website-maintenance.png',
    imgWidth: 700,
    slug: '/solutions/website-maintenance',
  },

  {
    id: 3,
    title: 'Speed optimization',
    description:
      "Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers. Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers.",
    imgHeight: 700,
    imgUrl: '/hero/speed-optimization-2.png',
    imgWidth: 700,
    slug: '/solutions/speed-optimization',
  },

  {
    id: 4,
    title: 'WordPress security',
    description:
      "Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers. Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers.",
    imgHeight: 700,
    imgUrl: '/hero.png',
    imgWidth: 700,
    slug: '/solutions/wordpress-security',
  },

  {
    id: 5,
    title: 'Blacklist removal',
    description:
      "Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers. Hackers don't take vacations. Restore your peace of mind by securing your online presence with our expert engineers.",
    imgHeight: 700,
    imgUrl: '/hero.png',
    imgWidth: 700,
    slug: '/solutions/blacklist-removal',
  },
];

const ServiceCarousel = () => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlider, setActiveSlider] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setActiveSlider(newIndex + 1);
    },
  };

  return (
    <div className='space-y-10'>
      <TitleWithBottomBorder>
        Facing Website Security Concerns?
      </TitleWithBottomBorder>
      <div
        className={cn(
          'flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8',
          `md:h-72`,
        )}>
        <ul
          className={`w-full md:w-1/3 space-y-2 grid grid-rows-${services.length}`}>
          {services?.map((service, index) => (
            <ServiceTitle
              onClick={(id) => {
                sliderRef?.current?.slickGoTo(id - 1);
              }}
              serviceId={index + 1}
              key={service.id}
              activeSlider={activeSlider}>
              {service.title}
            </ServiceTitle>
          ))}
        </ul>
        <Slider ref={sliderRef} {...settings} className='w-full md:w-2/3'>
          {services.map(
            (
              { id, imgUrl, description, title, slug, imgHeight, imgWidth },
              index,
            ) => (
              <ServiceDescription
                key={id}
                id={index + 1}
                imgUrl={imgUrl}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                description={description}
                title={title}
                slug={slug}
              />
            ),
          )}
        </Slider>
      </div>
    </div>
  );
};

type ServiceTitleTypes = {
  children: ReactNode;
  onClick: (id: number) => void;
  serviceId: number;
  activeSlider: number;
};

type ServiceDescriptionType = {
  id: number;
  imgUrl: string;
  imgWidth?: number;
  imgHeight?: number;
  title: string;
  description: string;
  // list: string;
  slug: string;
};

const ServiceDescription = ({
  title,
  description,
  id,
  imgUrl,
  imgHeight,
  imgWidth,
  slug,
}: ServiceDescriptionType) => {
  return (
    <div
      data-id={id}
      className='flex flex-col md:space-x-8 space-y-4 md:px-4 py-8 md:pt-0 md:pb-3 rounded w-full'>
      <div
        style={{
          userSelect: 'text',
        }}
        className='flex md:flex-row flex-col md:space-x-6 space-y-6 md:space-y-0 md:max-h-[300px] yse'>
        <div className='flex justify-center items-center w-full md:w-1/2'>
          <Image
            className='object-center object-cover'
            width={600}
            height={400}
            src={imgUrl}
            alt='test'
            // priority={id === 1}
          />
        </div>
        <div className='flex flex-col justify-center gap-4 space-y-4 w-full md:w-1/2'>
          <div className='space-y-2'>
            <h2 className='line-clamp-2 font-medium text-2xl'>{title}</h2>
            <p
              className='line-clamp-6 text-base'
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>

          <div className='flex justify-end'>
            <Button asChild variant='outline'>
              <Link href={`/solutions/${slug}`}>Fix the issue</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceTitle = ({
  children,
  onClick,
  serviceId,
  activeSlider,
}: ServiceTitleTypes) => {
  const activeClasses =
    activeSlider === serviceId ? ' bg_primary font-medium text-gray-800' : '';

  return (
    <li
      onClick={() => onClick(serviceId)}
      className={cn(
        `px-6 cursor-pointer flex items-center py-1 border border-black rounded h-11` +
          activeClasses,
      )}>
      {children}
    </li>
  );
};

export default ServiceCarousel;
