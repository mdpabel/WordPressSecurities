import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { PostType } from '@/wordpress/posts';

export type PostCardType = {
  blog: PostType;
  className?: string;
};

export const BigCard = ({ blog, className }: PostCardType) => {
  return (
    <Link href={'/guides/' + blog?.slug}>
      <Card className={cn('h-[350px]', className, 'px-4 md:px-6 space-y-3')}>
        <div
          style={{
            maxHeight: '50%',
          }}
          className='row-span-3'>
          <Image
            width={400}
            height={400}
            className='object-contain object-center h-full max-h-[175px] w-auto mx-auto'
            src={blog?.featuredImage}
            alt={blog?.featuredImageAlt}
          />
        </div>
        <div className='flex flex-col justify-between space-y-4 h-1/2 items-start'>
          <div className='space-y-1'>
            <span className='font-medium text-gray-700'>{blog?.date}</span>
            <h2 className='text-lg font-semibold tracking-wide line-clamp-2'>
              {blog?.title}
            </h2>
            <p className='text-sm tracking-wide line-clamp-3'>
              {blog?.excerpt}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};
