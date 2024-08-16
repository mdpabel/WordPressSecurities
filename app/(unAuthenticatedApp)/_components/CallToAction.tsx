'use client';
import { Button } from '@/components/Button';
import { useClassName } from '@/hooks/useClassName';
import Link from 'next/link';
import React from 'react';

const CallToAction = ({
  buttonLink,
  className,
  buttonText,
  btnTarget,
}: {
  buttonLink: string;
  className?: string;
  buttonText: string;
  btnTarget?: '_blank' | '_self';
}) => {
  const btnClassName = useClassName();

  return (
    <Button asChild className={`${className} ${btnClassName}`}>
      <Link target={btnTarget ? btnTarget : '_self'} href={buttonLink}>
        {buttonText}
      </Link>
    </Button>
  );
};

export default CallToAction;
