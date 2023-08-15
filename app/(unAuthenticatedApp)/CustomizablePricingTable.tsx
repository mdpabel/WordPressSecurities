"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";
import Button from "@/components/Button";
import { TickIcon } from "@/components/icons";
import { useUser } from "@/stores/user";
import Spinner from "@/components/Spinner";
import { client } from "@/utils/client";
import { loadStripe } from "@stripe/stripe-js";

interface IPlan {
  price: number;
  features: string[];
}

export const PricingColumn = ({
  plan,
  className = "",
  subTitle,
  title,
}: {
  plan: IPlan;
  className?: string;
  subTitle: string;
  title: string;
}) => {
  const searchParams = useSearchParams();
  const selectedItems = searchParams.get("items")?.trim() ?? "2";
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, userId } = useUser();
  const { features, price } = plan;

  const showBuyNowButton = isLoggedIn;
  const showCreateAccountButton = !isLoggedIn;

  console.log(selectedItems);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const data = await client(`/api/payment?items=${selectedItems}`);
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );

      stripe?.redirectToCheckout({
        sessionId: data.sessionId,
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg_primary rounded-lg border border-gray-100 shadow  ${className}`}
    >
      <div className="">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-gray-700 sm:text-lg ">{subTitle}</p>
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">
            ${price.toFixed(2)}
          </span>
          <span className="text-gray-500 ">/onetime</span>
        </div>
      </div>
      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((service, index) => (
          <li key={index} className="flex items-center space-x-3">
            <TickIcon />
            <span>{service}</span>
          </li>
        ))}
      </ul>
      {showBuyNowButton && (
        <Button
          outline={true}
          onClick={handlePayment}
          className="flex justify-center"
        >
          {loading ? <Spinner className="text-black" /> : "Buy now"}
        </Button>
      )}

      {showCreateAccountButton && (
        <Button
          className="flex justify-center"
          href="/register"
          type="link"
          outline={true}
        >
          Get started
        </Button>
      )}
    </div>
  );
};

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

const services = [
  {
    id: 1,
    label: "Malware/hacked removal",
    price: 30,
  },
  {
    id: 2,
    label: "Software update",
    price: 0,
  },
  {
    id: 3,
    label: "Google safe browsing blacklist removal",
    price: 25,
  },
  {
    id: 4,
    label: "McAfee blacklist removal",
    price: 15,
  },
  {
    id: 5,
    label: "Norton safe blacklist removal",
    price: 15,
  },
  {
    id: 6,
    label: "SSL installation",
    price: 30,
  },
  {
    id: 7,
    label: "Security patch installation",
    price: 40,
  },
  {
    id: 8,
    label: "Ddos protection",
    price: 70,
  },
  {
    id: 9,
    label: "http 500 internal server error",
    price: 15,
  },
  {
    id: 10,
    label: "Penetration testing",
    price: 99,
  },
];

const CustomizablePricingTable = () => {
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
    router.push(
      `${pathName}/?type=instant&items=${String(itemsCopy)}#instant`,
      {
        scroll: false,
      }
    );
  };

  const selectedServices = services.filter(
    (service) => items.indexOf(service.id) > -1
  );

  const features = selectedServices.map((s) => s.label);

  let totalPrice = selectedServices.reduce(
    (total, service) => service.price + total,
    0
  );

  return (
    <section
      id="instant"
      className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 pt-5"
    >
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
      <div className="col-span-1">
        <PricingColumn
          plan={{
            features: features,
            price: totalPrice,
          }}
          title="Adapting to Your Needs"
          subTitle="Customizable Protection Plans for Unyielding WordPress Safety"
          className="w-full max-w-full"
        />
      </div>
    </section>
  );
};

export default CustomizablePricingTable;
