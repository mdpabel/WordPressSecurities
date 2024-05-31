import ComponentWrapper from '@/components/ComponentWrapper';
import BlogSidebar from './_components/BlogSidebar';
import Popular from './_components/Popular';
import SocialShare from './_components/SocialShare';
import { PostType, getPostBySlug, getPosts } from '@/wordpress/posts';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { CalenderIcon } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import '@/styles/wp.scss';

export const dynamic = 'force-static';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post?.seo?.title,
    description: post?.seo?.metaDesc,
    keywords: post?.seo?.metaKeywords,
    openGraph: {
      images: [post?.featuredImage, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const posts: PostType[] = await getPosts();

  return posts?.map((post) => ({
    slug: post.slug,
  }));
}

type GuideType = {
  params: {
    slug: string;
  };
};

const Guide = async ({ params }: GuideType) => {
  const blog = await getPostBySlug(params?.slug);

  if (!blog) return notFound();

  return (
    <ComponentWrapper className='flex lg:flex-row flex-col lg:space-x-8 space-y-8 lg:space-y-0 mt-10'>
      <div className='space-y-10 w-full lg:w-[70%]'>
        <div className='space-y-4 bg-white md:px-0 md:py-8 p-2 rounded'>
          <h1 className='font-semibold text-3xl break-words'>{blog?.title}</h1>
          <div className='flex space-x-8'>
            <div className='flex space-x-2'>
              <Avatar className='w-8 h-8'>
                <AvatarImage
                  src={blog.author?.avatarUrl!}
                  alt={blog?.author?.avatarUrlAlt!}
                />
                <AvatarFallback>{blog?.author?.firstName}</AvatarFallback>
              </Avatar>
              <span>
                By {blog?.author?.firstName + ' ' + blog?.author?.lastName}
              </span>
            </div>
            <div className='flex space-x-2'>
              <CalenderIcon />
              <span>{blog?.date}</span>
            </div>
          </div>

          <Suspense fallback='Loading....'>
            <SocialShare
              id={blog?.id}
              url={`https://wordpresssecurites.com/${params?.slug}`}
            />
          </Suspense>

          <div
            className='max-w-full prose'
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          />
        </div>
        <Suspense fallback='Loading...'>
          <Popular />
        </Suspense>
      </div>
      <div className='lg:pt-12 w-full lg:w-1/3'>
        <BlogSidebar />
      </div>
    </ComponentWrapper>
  );
};

export default Guide;
