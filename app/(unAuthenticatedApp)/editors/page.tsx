import ComponentWrapper from '@/components/ui/ComponentWrapper';
import { SectionTitleWithSubTitle } from '@/components/ui/Title';
import React from 'react';
import ProfileCard from './ProfileCard';
import { getAuthors } from '@/wordpress/author';

const page = async () => {
  const authors = await getAuthors();

  return (
    <ComponentWrapper>
      <SectionTitleWithSubTitle
        title={`WordPress Securities Editors' Spotlight`}
        subTitle='Discover Expert Insights and Tips from Our WordPress Security Blog Contributors'
      />

      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
        {authors?.map((author) => (
          <ProfileCard key={author.userId} author={author} />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default page;
