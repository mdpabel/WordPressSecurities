import { Title } from '@/components/Title';
import ComponentWrapper from '@/components/ComponentWrapper';
import { SmallCard } from '../../_components/SmallCard';
import { getMostViewedPosts } from '@/wordpress/posts';

const Popular = async () => {
  const data = await getMostViewedPosts(4);

  return (
    <ComponentWrapper>
      <Title>Discover the Hottest Topics on WordPressSecurities</Title>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4'>
        {data?.map((post) => (
          <SmallCard key={post?.id} blog={post!} className='shadow-none ' />
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default Popular;
