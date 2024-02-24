'use client';
import React, { ReactNode, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TitleWithBottomBorder } from '@/components/ui/Title';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
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

const ServiceCarousel = ({ services }: PropTypes) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlider, setActiveSlider] = useState(1);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    pauseOnHover: true,
    adaptiveHeight: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setActiveSlider(newIndex + 1);
    },
  };

  return (
    <div className='space-y-8'>
      <TitleWithBottomBorder>
        Facing Website Security Concerns?
      </TitleWithBottomBorder>
      <div
        className={cn(
          'flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8',
          `md:h-72`,
        )}>
        <ul
          className={`w-full md:w-1/3 space-y-4 grid grid-rows-${services.length}`}>
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
      className='w-full flex flex-col space-y-4 md:space-x-8 md:px-4 py-8 md:pb-3 md:pt-0 rounded'>
      <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6'>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <Image
            className='object-cover object-center'
            width={imgWidth || 600}
            height={imgHeight || 400}
            src={imgUrl}
            alt='test'
            // priority={id === 1}
          />
        </div>
        <div className='w-full md:w-1/2 space-y-4 flex flex-col justify-between gap-4'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-medium line-clamp-2'>{title}</h2>
            <p className='text-base line-clamp-6'>{description}</p>
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
    activeSlider === serviceId ? 'bg_primary font-bold' : '';

  return (
    <li
      onClick={() => onClick(serviceId)}
      className={cn(
        `px-6 cursor-pointer flex items-center py-2 border border-black rounded h-11` +
          activeClasses,
      )}>
      {children}
    </li>
  );
};

export default ServiceCarousel;
