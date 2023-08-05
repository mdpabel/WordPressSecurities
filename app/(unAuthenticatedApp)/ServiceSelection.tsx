'use client';
import { Title } from '@/components/Title';
import React, { ReactNode, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ServiceDescription from './ServiceDescription';

interface IServiceTitle {
  children: ReactNode;
  onClick: (id: number) => void;
  serviceId: number;
  activeSlider: number;
}

const ServiceTitle = ({
  children,
  onClick,
  serviceId,
  activeSlider,
}: IServiceTitle) => {
  const activeClasses =
    activeSlider === serviceId ? 'bg_primary font-bold' : '';

  return (
    <li
      onClick={() => onClick(serviceId)}
      className={
        `px-6 cursor-pointer flex items-center py-2 border border-black rounded ` +
        activeClasses
      }
    >
      {children}
    </li>
  );
};

const serviceDetails = [
  {
    id: 1,
    pricingTableId: [2, 1],
    imgUrl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    title: 'Unified communication and collaboration platform',
    subTitle:
      'Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.',
    list: [
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
    ],
  },

  {
    id: 2,
    pricingTableId: [2, 3, 4, 5],
    imgUrl:
      'https://www.monlyceenumerique.fr/snt_seconde/photographie_numerique/Cours/img/profondeur_3.bmp',
    title: 'Unified communication and collaboration platform',
    subTitle:
      ' Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.',
    list: [
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
    ],
  },

  {
    id: 3,
    pricingTableId: [2, 7],
    imgUrl:
      'https://media.istockphoto.com/id/509927332/photo/icefields-parkway.jpg?s=612x612&w=0&k=20&c=w7suW6fuZw-U77WmN-nRXYsO_G0FzuICYgzrgm1fFA8=',
    title: 'Unified communication and collaboration platform',
    subTitle:
      ' Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.',
    list: [
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
    ],
  },

  {
    id: 4,
    pricingTableId: [2, 10],
    imgUrl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    title: 'Unified communication and collaboration platform',
    subTitle:
      ' Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.',
    list: [
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
    ],
  },

  {
    id: 5,
    pricingTableId: [2, 8],
    imgUrl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    title: 'Unified communication and collaboration platform',
    subTitle:
      ' Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.',
    list: [
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
    ],
  },

  {
    id: 5,
    pricingTableId: [2, 9],
    imgUrl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    title: 'Unified communication and collaboration platform',
    subTitle:
      ' Make meaningful connections with meetings, team chat, whiteboard, phone, and more in one offering.',
    list: [
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
      'Make meaningful',
    ],
  },
];

const serviceList = [
  {
    id: 1,
    label: 'Malware & Hacked Removal',
  },
  {
    id: 2,
    label: 'Blacklist removal',
  },
  {
    id: 3,
    label: 'Malware & Blacklist Prevention',
  },
  {
    id: 4,
    label: 'Penetration Testing',
  },
  {
    id: 5,
    label: 'DDoS Protection',
  },
  {
    id: 6,
    label: 'Say Goodbye to Errors',
  },
];

const ServiceSelection = () => {
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
    beforeChange: (oldIndex: number, newIndex: number) => {
      setActiveSlider(newIndex + 1);
    },
  };

  return (
    <div className='space-y-8'>
      <Title>Facing Website Security Concerns?</Title>
      <div className='flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
        <ul className={`w-full md:w-1/3 space-y-4`}>
          {serviceList.map((item) => (
            <ServiceTitle
              onClick={(id) => {
                sliderRef?.current?.slickGoTo(id - 1);
              }}
              serviceId={item.id}
              key={item.id}
              activeSlider={activeSlider}
            >
              {item.label}
            </ServiceTitle>
          ))}
        </ul>
        <Slider ref={sliderRef} {...settings} className='w-full md:w-2/3'>
          {serviceDetails.map(
            ({ id, imgUrl, list, subTitle, title, pricingTableId }) => (
              <ServiceDescription
                pricingTableId={pricingTableId}
                key={id}
                id={id}
                imgUrl={imgUrl}
                list={list}
                subTitle={subTitle}
                title={title}
              />
            ),
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceSelection;
