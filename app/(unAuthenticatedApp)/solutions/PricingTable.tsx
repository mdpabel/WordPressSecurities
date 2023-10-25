"use client";
import { services } from "@/data/pricingData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface IServiceItem {
  label: string;
  price: number;
  id: number;
  onChange: (checked: boolean, id: string) => void;
  items: number[];
}

const ServiceItem = ({ label, price, id, onChange, items }: IServiceItem) => {
  return (
    <li className="w-full border-b border-gray-200 rounded-t-lg">
      <div className="flex items-center pl-3">
        <input
          onChange={(e) => onChange(e.target.checked, e.target.value)}
          id={label}
          value={id}
          type="checkbox"
          checked={items.indexOf(id) > -1}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
        />
        <label
          htmlFor={label}
          className="w-full py-3 ml-2 text-base font-medium text-gray-900 flex justify-between"
        >
          <span>{label}</span>
          <span className="font-bold">${price}</span>
        </label>
      </div>
    </li>
  );
};

const PricingTable = () => {
  const [items, setItems] = useState<number[]>([2]);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const selectedItems = searchParams.get("items")?.trim() ?? "2";

  useEffect(() => {
    const parsedSelectedItems = selectedItems
      .split(",")
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
    router.push(`${pathName}/?items=${String(itemsCopy)}#instant`, {
      scroll: false,
    });
  };

  return (
    <div className="border shadow-sm p-5 rounded sticky top-0">
      <div className="text-center text-xl">
        <h2 className="font-medium">Fixed your site</h2>
        <h2 className="font-bold">$99.99</h2>
      </div>
      <ul className="col-span-1 text-sm font-medium text-gray-900 rounded-lg">
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
    </div>
  );
};

export default PricingTable;
