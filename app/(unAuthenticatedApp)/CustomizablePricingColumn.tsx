import Button from "@/components/Button";
import { TickIcon } from "@/components/icons";

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
  const { features, price } = plan;

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
      <Button outline={true} onClick={() => {}} className="flex justify-center">
        Subscribe
      </Button>
    </div>
  );
};
