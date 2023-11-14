import { unstable_noStore as noStore } from 'next/cache';
import prisma from '@/db/mongo';

const ViewCount = async ({ id }: { id: string }) => {
  noStore();
  const res = await prisma.postView.upsert({
    where: {
      postId: id,
    },
    update: {
      views: {
        increment: 1,
      },
    },
    create: {
      postId: id,
      views: 1,
    },
  });

  console.log(res);

  return (
    <div className='px-5 py-1 font-semibold border rounded shadow-sm'>
      {res?.views + ' Views'}
    </div>
  );
};

export default ViewCount;
