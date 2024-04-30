import { Button } from '@/components/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/Card';
import { User } from '@/wordpress/author';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfileCard = ({ author }: { author: User }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{author.name}</CardTitle>
        <CardDescription>Software Developoer</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={author.avatar.url}
          alt={author.name ?? 'Author'}
          width={500}
          height={500}
        />
      </CardContent>
      <CardFooter className='flex justify-between items-center'>
        <Link href='/'>Explore His Content</Link>
        <strong className='text-gray-800'>100*</strong>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
