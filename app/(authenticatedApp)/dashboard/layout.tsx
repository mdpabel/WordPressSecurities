import { ReactNode } from 'react';
import { Title } from '@/components/ui/Title';
import Link from 'next/link';

export default function DashboardLayout({
  children,
  orders,
  reports,
  card,
  sites,
}: {
  children: ReactNode;
  orders: ReactNode;
  reports: ReactNode;
  sites: ReactNode;
  card: ReactNode;
}) {
  return (
    <div className='space-y-6'>
      {children}
      <div className='space-y-4'>
        <div className='flex justify-between'>
          <Title className='text-lg'>Your Latest Transactions</Title>
          <Link href='/orders'>View all</Link>
        </div>
        {orders}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {sites}
        {card}
      </div>
    </div>
  );
}
