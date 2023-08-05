'use client';
import React, { useEffect, useState } from 'react';
import { PricingColumn } from './Subscription';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';

interface IServiceItem {
  label: string;
  price: number;
  id: number;
  onChange: (checked: boolean, id: string) => void;
  items: number[];
}

const ServiceItem = ({ label, price, id, onChange, items }: IServiceItem) => {
  return (
    <li className='w-full border-b border-gray-200 rounded-t-lg'>
      <div className='flex items-center pl-3'>
        <input
          onChange={(e) => onChange(e.target.checked, e.target.value)}
          id={label}
          value={id}
          type='checkbox'
          checked={items.indexOf(id) > -1}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
        />
        <label
          htmlFor={label}
          className='w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between'
        >
          <span>{label}</span>
          <span className='font-bold'>${price}</span>
        </label>
      </div>
    </li>
  );
};

const services = [
  {
    id: 1,
    label: 'Malware/hacked removal',
    price: 30,
  },
  {
    id: 2,
    label: 'Software update',
    price: 0,
  },
  {
    id: 3,
    label: 'Google safe browsing blacklist removal',
    price: 25,
  },
  {
    id: 4,
    label: 'McAfee blacklist removal',
    price: 15,
  },
  {
    id: 5,
    label: 'Norton safe blacklist removal',
    price: 15,
  },
  {
    id: 6,
    label: 'SSL installation',
    price: 30,
  },
  {
    id: 7,
    label: 'Security patch installation',
    price: 40,
  },
  {
    id: 8,
    label: 'Ddos protection',
    price: 70,
  },
  {
    id: 9,
    label: 'http 500 internal server error',
    price: 15,
  },
  {
    id: 10,
    label: 'Penetration testing',
    price: 99,
  },
];

const CustomizablePricingTable = () => {
  const [items, setItems] = useState<number[]>([2]);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const selectedItems = searchParams.get('items')?.trim() ?? '2';

  useEffect(() => {
    const parsedSelectedItems = selectedItems
      .split(',')
      .map((item) => parseInt(item));

    setItems(parsedSelectedItems);
  }, [selectedItems]);

  const handleChecked = (checked: boolean, id: string) => {
    const itemsCopy = [...items];
    if (checked) {
      itemsCopy.push(+id);
    } else {
      const idx = itemsCopy.indexOf(+id);
      itemsCopy.splice(idx, 1);
    }
    setItems([...itemsCopy]);
    router.push(`${pathName}/?items=${String(itemsCopy)}`, {
      scroll: false,
    });
  };

  const selectedServices = services.filter(
    (service) => items.indexOf(service.id) > -1,
  );

  return (
    <section
      id='instant'
      className='grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 pt-5'
    >
      <ul className='col-span-1 text-sm font-medium text-gray-900 rounded-lg'>
        {services.map((service) => (
          <ServiceItem
            items={items}
            key={service.id}
            id={service.id}
            label={service.label}
            price={service.price}
            onChange={handleChecked}
          />
        ))}
      </ul>
      <div className='col-span-1'>
        <PricingColumn
          services={selectedServices}
          className='w-full max-w-full'
        />
      </div>
    </section>
  );
};

export default CustomizablePricingTable;
