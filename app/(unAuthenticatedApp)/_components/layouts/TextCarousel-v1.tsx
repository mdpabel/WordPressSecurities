'use client';
import { useInterval } from '@/hooks/useInterval';
import React, { useState, useEffect, useRef } from 'react';

type PropTypes = {
  interval?: number;
};

const texts = [
  'Discover how to protect your WordPress site from threats',
  'Hello world',
  'Something',
];

const TextCarousel = ({ interval }: PropTypes) => {
  const currentTextIndex = useInterval({
    limit: texts.length,
  });
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      console.log(currentTextIndex, containerRef);
      containerRef.current.scrollTo({
        left: currentTextIndex * containerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [currentTextIndex]);

  return (
    <div className='relative overflow-hidden'>
      <ul
        style={{
          width: 500,
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
        }}
        ref={containerRef}
        className='flex overflow-hidden'>
        {texts.map((text, index) => (
          <li
            style={{
              scrollSnapAlign: 'start',
              minWidth: 500,
            }}
            key={index}
            className='w-full'>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextCarousel;
