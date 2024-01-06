import React from 'react';

const PricingTableLoadingSkeleton = () => {
  return (
    <section className='grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 pt-5'>
      <ul className='col-span-1 text-sm font-medium text-gray-900 rounded-lg space-y-6'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <li
            key={index}
            className='w-full border-b border-gray-200 rounded-t-lg animate-pulse'>
            <div className='flex items-center pl-3'>
              <div className='w-4 h-4 bg-gray-200 rounded mr-2'></div>
              <div className='w-2/3 h-10 bg-gray-200 rounded'></div>
            </div>
          </li>
        ))}
      </ul>
      <div className='col-span-1'>
        <div className='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg_gray-200 rounded-lg border border-gray-100 shadow animate-pulse'>
          <div className='mb-4 h-6 bg-gray-200 rounded w-2/3 mx-auto'></div>
          <p className='font-light text-gray-300 h-4 w-1/2 mx-auto mb-8'></p>
          <div className='flex justify-center items-baseline my-8'>
            <div className='mr-2 h-12 w-16 bg-gray-200 rounded'></div>
            <div className='h-4 w-16 bg-gray-200 rounded'></div>
          </div>
          <ul role='list' className='mb-8 space-y-4 text-left'>
            {[1, 2, 3].map((index) => (
              <li key={index} className='flex items-center space-x-3'>
                <div className='w-4 h-4 bg-gray-200 rounded'></div>
                <div className='w-2/3 h-4 bg-gray-200 rounded'></div>
              </li>
            ))}
          </ul>
          <button className='flex justify-center border border-black animate-pulse'>
            <div className='h-12 w-36 bg-gray-200 rounded'></div>
          </button>
          <button className='flex justify-center animate-pulse'>
            <div className='h-12 w-36 bg-gray-200 rounded'></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingTableLoadingSkeleton;
