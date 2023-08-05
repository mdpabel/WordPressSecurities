import { ReactNode } from 'react';

export const Title = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`relative` + className}>
    <h2 className='z-10 inline-block py-2 font-semibold text-2xl'>
      {children}
    </h2>
    <div className='w-full h-[2px] bg-gray-500 absolute bottom-0'></div>
  </div>
);
