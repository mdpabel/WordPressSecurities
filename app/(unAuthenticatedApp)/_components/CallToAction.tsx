'use client';
import { Button } from '@/components/Button';
import { useClassName } from '@/hooks/useClassName';
import Link from 'next/link';
import React from 'react';

const CallToAction = ({
  buttonLink,
  className,
  buttonText,
}: {
  buttonLink: string;
  className?: string;
  buttonText: string;
}) => {
  const btnClassName = useClassName();

  return (
    <Button asChild className={`${className} ${btnClassName}`}>
      <Link href={buttonLink}>{buttonText}</Link>
    </Button>
  );
};

export default CallToAction;
