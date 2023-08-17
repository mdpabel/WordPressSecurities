import { services } from "@/utils/pricingData";
import SubscribeButton from "./SubscribeButton";
import { TickIcon } from "@/components/icons";
import PricingColumnBody from "./PricingColumnBody";

export const PricingColumnHeader = ({
  price,
  name,
  interval,
  discount,
  totalPrice,
  months,
  subTitle,
}: {
  price: number;
  name: string;
  interval: string;
  months: number;
  discount: number;
  totalPrice: number;
  subTitle?: string;
}) => {
  return (
    <div className="">
      <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
      <p className="font-light text-gray-700 sm:text-lg ">
        {subTitle ? (
          subTitle
        ) : (
          <>
            ${totalPrice} billed every {months} months{" "}
            {discount > 0 && (
              <span>
                (Save <strong className="font-bold">{discount}%</strong> vs
                monthly)
              </span>
            )}
            {discount === 0 && <span>Cancel anytime.</span>}
          </>
        )}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">
          ${(price / 100).toFixed(2)}
        </span>
        <span className="text-gray-500 ">/month</span>
      </div>
    </div>
  );
};

interface IPlan {
  id: string;
  name: string;
  price: number;
  months: number;
  discount: number;
  interval: string;
  currency: string;
  features: string[];
}

export const PricingColumn = ({
  plan,
  className = "",
}: {
  plan: IPlan;
  className?: string;
}) => {
  const { currency, discount, features, id, interval, months, name, price } =
    plan;

  const allFeatures = services?.map((f) => f.label) ?? features;

  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg_primary rounded-lg border border-gray-100 shadow  ${className}`}
    >
      <PricingColumnHeader
        interval={interval}
        name={name}
        price={price}
        totalPrice={price / 100}
        months={months}
        discount={discount}
      />
      <PricingColumnBody allFeatures={allFeatures} />
      <SubscribeButton planId={id} />
    </div>
  );
};
