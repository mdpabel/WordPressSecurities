import { unstable_noStore as noStore } from 'next/cache';
import prisma from '@/prisma/prisma';

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

  return (
    <div className='px-5 py-1 font-semibold border rounded shadow-sm'>
      {res?.views + ' Views'}
    </div>
  );
};

export default ViewCount;
