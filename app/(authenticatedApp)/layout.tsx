import ComponentWrapper from '@/components/ui/ComponentWrapper';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Sidebar from '@/components/layouts/Sidebar';

import {
  BookIcon,
  DashBoardIcon,
  SubScriptionIcon,
  SupportInboxIcon,
  UserIcon,
} from '@/components/ui/icons-client';
const sidebarItems = [
  {
    id: 1,
    Icon: DashBoardIcon,
    label: 'Dashboard',
    link: '/dashboard',
  },
  {
    id: 2,
    Icon: SubScriptionIcon,
    label: 'Manage Subscriptions',
    link: '/manage-subscriptions',
  },
  {
    id: 3,
    Icon: SubScriptionIcon,
    label: 'Orders',
    link: '/orders',
  },
  {
    id: 4,
    Icon: BookIcon,
    label: 'Security Reports',
    link: '/security-reports',
  },
  {
    id: 5,
    Icon: SupportInboxIcon,
    label: 'Customer Support',
    link: '/customer-support',
  },

  {
    id: 6,
    Icon: UserIcon,
    label: 'Manage Account',
    link: '/manage-account',
  },
];

export default async function UnAuthenticatedAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg_primary'>
      <Header dashboard={true} />
      <ComponentWrapper className='flex'>
        <Sidebar sidebarItems={sidebarItems} />
        <main className='p-4 -ml-64 md:ml-0 min-h-[80vh] flex-1'>
          {children}
        </main>
      </ComponentWrapper>
      <Footer />
    </div>
  );
}
