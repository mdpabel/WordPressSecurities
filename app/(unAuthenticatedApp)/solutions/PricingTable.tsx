'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface IServiceItem {
  label: string;
  price: number;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  items: string[];
}

const ServiceItem = ({ label, price, id, onChange, items }: IServiceItem) => {
  return (
    <li className='w-full border-b border-gray-200 rounded-t-lg'>
      <div className='flex items-center pl-3'>
        <input
          onChange={onChange}
          id={label}
          value={id}
          type='checkbox'
          checked={items.indexOf(id) > -1}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
        />
        <label
          htmlFor={label}
          className='w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between'>
          <span>{label}</span>
          <span className='font-bold'>${price}</span>
        </label>
      </div>
    </li>
  );
};

type ProductTitleAndPrice = {
  title: string;
  price: number;
  id: string;
};

type PropType = {
  services: ProductTitleAndPrice[];
};

const PricingTable = ({ services }: PropType) => {
  const freeServices = services
    .filter((service) => service.price === 0)
    .map((service) => service.id);

  const [items, setItems] = useState(freeServices);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemsCopy = [...items];
    const checked = e.target.checked;
    const id = e.target.value;

    if (checked) {
      itemsCopy.push(id);
    } else {
      const idx = itemsCopy.indexOf(id);
      itemsCopy.splice(idx, 1);
    }
    setItems([...itemsCopy]);
  };

  const selectedServices = services.filter(
    (service) => items.indexOf(service.id) > -1,
  );

  const features = selectedServices.map((s) => s.title);

  let totalPrice = selectedServices.reduce(
    (total, service) => service.price + total,
    0,
  );

  return (
    <div className='border shadow-sm p-5 rounded sticky top-0'>
      <div className='text-center text-xl'>
        <h2 className='font-medium'>Fix your site</h2>
        <h2 className='font-bold'>$99.99</h2>
      </div>
      <ul className='col-span-1 text-sm font-medium text-gray-900 rounded-lg'>
        {services.map((service) => (
          <ServiceItem
            items={items}
            key={service.id}
            id={service.id}
            label={service.title}
            price={service.price}
            onChange={handleChecked}
          />
        ))}
      </ul>
    </div>
  );
};

export default PricingTable;
