import { productFeatures, services } from "@/data/pricingData";
import { stripe } from "@/lib/stripe";
import { PricingColumn } from "./PricingColumn";
import { calculatePercentageDiscount } from "@/lib/utils";
import { Suspense } from "react";

const Subscription = async () => {
  const { data } = await stripe.prices.list();

  const plans = await Promise.all(
    data.map(async (price) => {
      const productId = price.product as string;
      const product = await stripe.products.retrieve(productId);
      const id = price.id as string;

      return {
        id: id,
        name: product.name,
        price: price.unit_amount as number,
        months: parseInt(product.metadata?.months),
        discount: calculatePercentageDiscount(
          parseInt(product.metadata?.first_price),
          parseInt(product.metadata?.first_price_months),
          (price.unit_amount as number) / 100,
          parseInt(product.metadata?.months)
        ),
        interval: price.recurring?.interval as string,
        currency: price.currency,
        features: productFeatures.find((p) => p.id === id)
          ?.features as string[],
      };
    })
  );

  const sortedPlans = plans.sort((a, b) => a.price - b.price);

  return (
    <section id="subscription">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {sortedPlans.map((plan) => (
            <PricingColumn plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
