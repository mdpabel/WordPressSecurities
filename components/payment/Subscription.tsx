import { productFeatures, services } from "@/data/pricingData";
import { stripe } from "@/lib/stripe";
import { PricingColumn } from "./PricingColumn";
import { calculatePercentageDiscount } from "@/lib/utils";
import { products } from "@/data/data";

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
