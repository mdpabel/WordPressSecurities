import { productFeatures, services } from "@/data/pricingData";
import { stripe } from "@/lib/stripe";
import { PricingColumn } from "./PricingColumn";
import { calculatePercentageDiscount } from "@/lib/utils";

const products = [
  {
    id: "price_1NbhRoKIp7tnSVmZb2KKUjye",
    plan: "Quarterly plan",
  },
  {
    id: "price_1NbhUDKIp7tnSVmZT6CgtMPz",
    plan: "Half annual plan",
  },
  {
    id: "price_1NbhV4KIp7tnSVmZfBVVfIEq",
    plan: "Annual plan",
  },
];

const Subscription = async () => {
  return (
    <section id="subscription">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {products.map(({ id }) => (
            <PricingColumn key={id} productId={id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
