import { Email, FaceBook, Linkedin, Twitter } from './SocialShare.client';
import ViewCount from './ViewCount';
import { Suspense } from 'react';

interface ISocialShare {
  url: string;
  id: string;
}

const SocialShare = ({ url, id }: ISocialShare) => {
  return (
    <div className='grid grid-cols-2 pb-4 space-y-4 md:grid-cols-5 md:space-y-0 md:space-x-4 '>
      <Suspense fallback='loading...'>
        <ViewCount id={id} />
      </Suspense>
      <div className='md:hidden'></div>

      <FaceBook url={url} />
      <Twitter url={url} />
      <Linkedin url={url} />
      <Email url={url} />
    </div>
  );
};

export default SocialShare;
