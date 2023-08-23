"use client";
import React, { ReactNode, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceDescription from "./ServiceDescription";
import { Title } from "@/components/common/Title";
import { serviceDetails, serviceList } from "@/data/serviceCarousel";

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
    activeSlider === serviceId ? "bg_primary font-bold" : "";

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
    beforeChange: (oldIndex: number, newIndex: number) => {
      setActiveSlider(newIndex + 1);
    },
  };

  return (
    <div className="space-y-8">
      <Title>Facing Website Security Concerns?</Title>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
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
        <Slider ref={sliderRef} {...settings} className="w-full md:w-2/3">
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
            )
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceCarousel;
