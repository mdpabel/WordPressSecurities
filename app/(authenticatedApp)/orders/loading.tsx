import React from "react";
import Title from "../Title";
import { Card } from "@/components/common/Card";

const SkeletonOrderHeader = () => {
  return (
    <div className="flex flex-col items-center md:flex-row space-y-5 md:space-y-0 justify-between border-b border-gray-500 pb-3 animate-pulse">
      <div className="flex md:space-x-12">
        <div className="w-1/2 md:w-fit">
          <h2>Order number</h2>
          <h3 className="w-2/3 md:w-fit bg-gray-300 h-4 rounded"></h3>
        </div>
        <div className="w-1/2 md:w-fit">
          <h2>Order placed</h2>
          <h3 className="bg-gray-300 h-4 w-20 rounded"></h3>
        </div>
        <div className="hidden md:block">
          <h2>Total amount</h2>
          <h3 className="bg-gray-300 h-4 w-12 rounded"></h3>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 md:w-fit block md:hidden">
          <h2>Total amount</h2>
          <h3 className="bg-gray-300 h-4 w-12 rounded"></h3>
        </div>
        <div className="w-1/2 md:w-fit">
          <h2 className="px-4 py-1 rounded bg-gray-300 h-6 w-20"></h2>
        </div>
      </div>
    </div>
  );
};

const SkeletonServiceItem = () => {
  return (
    <li className="w-full border-b border-gray-200 rounded-t-lg animate-pulse">
      <div className="flex items-center pl-3">
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-full py-3 ml-2 text-base font-medium text-gray-300 flex justify-between">
          <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
          <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
        </div>
      </div>
    </li>
  );
};

const SkeletonOrder = () => {
  return (
    <Card className="p-4 md:p-8 rounded shadow">
      <SkeletonOrderHeader />

      <div className="mt-5">
        <h2 className="mb-5">Order details</h2>
        <ul>
          {[1, 2].map((service) => (
            <SkeletonServiceItem key={service} />
          ))}
        </ul>
      </div>
    </Card>
  );
};

const loading = () => {
  return (
    <div className="space-y-4">
      <Title>All Orders</Title>
      <div className="space-y-6">
        {[1, 2]?.map((order) => (
          <SkeletonOrder key={order} />
        ))}
      </div>
    </div>
  );
};

export default loading;
