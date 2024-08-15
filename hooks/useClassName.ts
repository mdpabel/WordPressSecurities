'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useClassName = () => {
  const [className, setClassName] = useState('');
  const pathName = usePathname();

  useEffect(() => {
    const className = pathName.replace('/solutions/', '');
    setClassName(className);
  }, [pathName]);

  return className;
};
