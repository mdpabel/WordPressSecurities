import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import { BigCard } from './_components/BigCard';
import { SectionTitleWithSubTitle } from '@/components/Title';
import { SmallCard } from './_components/SmallCard';
import Newsletter from './_components/Newsletter';
import { PostType, getMostViewedPosts, getPosts } from '@/wordpress/posts';

export const dynamic = 'force-static';

const Blog = async () => {
  const mostViewedBlogs = await getMostViewedPosts(3);
  const blogs: PostType[] = await getPosts();

  return (
    <ComponentWrapper className='pt-8 space-y-8'>
      <SectionTitleWithSubTitle
        title='Read, Learn, and Secure Your Website'
        subTitle='Explore Our Informative Blog for Actionable WordPress Security Insights and Tips.'
      />
      <div className='grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        <BigCard blog={mostViewedBlogs[0]} />

        <div className='space-y-[20px]'>
          <div>
            <SmallCard blog={mostViewedBlogs[1]} />
          </div>
          <div>
            <SmallCard blog={mostViewedBlogs[2]} />
          </div>
        </div>
        <Newsletter />
      </div>

      <div className='grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {blogs?.map((blog) => <BigCard key={blog?.slug} blog={blog} />)}
      </div>
    </ComponentWrapper>
  );
};

export default Blog;
