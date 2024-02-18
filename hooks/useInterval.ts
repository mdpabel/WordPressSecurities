'use client';
import React, { useEffect, useRef, useState } from 'react';

export const useInterval = ({
  interval,
  limit,
}: {
  interval?: number;
  limit?: number;
}) => {
  const [current, setCurrent] = useState(0);
  const intervalIdRef = useRef<number>(0);

  useEffect(() => {
    intervalIdRef.current = window.setInterval(() => {
      setCurrent((curr) => {
        if (limit) {
          return (curr + 1) % limit;
        }
        return curr + 1;
      });
    }, interval || 3000);

    return () => clearInterval(intervalIdRef.current);
  }, []);

  return current;
};
