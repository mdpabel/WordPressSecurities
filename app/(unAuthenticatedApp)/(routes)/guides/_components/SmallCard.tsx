import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/Card';
import { cn } from '@/lib/utils';
import { PostCardType } from './BigCard';

export const SmallCard = ({ blog, className }: PostCardType) => {
  return (
    <Link href={'/guides/' + blog?.slug}>
      <Card className={cn('h-[165px] flex grid-cols-5', className)}>
        <div className='row-span-3 col-span-2 p-2 '>
          <Image
            width={400}
            height={400}
            className='object-contain object-center w-full h-full'
            src={blog?.featuredImage}
            alt={blog?.featuredImageAlt}
          />
        </div>
        <div className='w-3/5 space-y-3 p-2 flex flex-col justify-center'>
          <span className='text-sm font-medium text-gray-700'>
            {blog?.date}
          </span>
          <h2 className={`text-sm font-medium line-clamp-3`}>{blog?.title}</h2>
        </div>
      </Card>
    </Link>
  );
};
