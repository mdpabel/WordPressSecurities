import { Suspense } from 'react';
import { currentUser } from '@clerk/nextjs';
import TransactionHistory from './TransactionHistory';
import TableSkeleton from './TableSkeleton';
import { Title } from '@/components/ui/Title';

const Dashboard = async () => {
  const user = await currentUser();
  const fullName = user?.firstName + ' ' + user?.lastName;

  return (
    <div>
      <Title>Welcome {fullName}</Title>
      <div className='py-5'>
        <h2 className='text-xl py-5 font-semibold flex space-x-2 items-center'>
          Transactions
        </h2>
        <Suspense fallback={<TableSkeleton />}>
          <TransactionHistory />
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
