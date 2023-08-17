import Button from "@/components/Button";
import { formateDate } from "@/utils/formateDate";
import { Order } from "@prisma/client";
import clsx from "clsx";
import React from "react";

const OrderHeader = ({
  price,
  orderId,
  createAt,
  status,
}: {
  price: number;
  orderId: string;
  createAt: Date;
  status: Order["order_status"];
}) => {
  return (
    <div className="flex flex-col items-center md:flex-row space-y-5 md:space-y-0 justify-between border-b border-gray-500 pb-3">
      <div className="flex md:space-x-12">
        <div className="w-1/2 md:w-fit">
          <h2>Order number</h2>
          <h3 className="w-2/3 md:w-fit text-gray-700 overflow-x-scroll">
            {orderId}
          </h3>
        </div>
        <div className="w-1/2 md:w-fit">
          <h2>Order placed</h2>
          <h3 className="text-gray-700">{formateDate(createAt)}</h3>
        </div>
        <div className="hidden md:block">
          <h2>Total amount</h2>
          <h3 className="text-gray-700">${price}</h3>
        </div>
      </div>
      <div className="flex ">
        <div className="w-1/2 md:w-fit block md:hidden">
          <h2>Total amount</h2>
          <h3 className="text-gray-700">${price}</h3>
        </div>
        <div className="w-1/2 md:w-fit">
          <h2
            className={clsx({
              "px-4 py-1 rounded text-white": true,
              "bg-green-700": status === "DELIVERED",
              "bg-sky-700": status === "PENDING",
              "bg-red-500": status === "UNDERREVISION",
            })}
          >
            {status}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
