import { productFeatures, services } from "@/data/pricingData";
import SubscribeButton from "./SubscribeButton";
import PricingColumnBody from "./PricingColumnBody";
import { stripe } from "@/lib/stripe";
import { calculatePercentageDiscount } from "@/lib/utils";
import { Suspense } from "react";
import { PricingColumnHeaderFallback } from "./PricingColumnHeaderFallback";

export const PricingColumnHeader = async ({
  productId,
  subTitle,
}: {
  productId: string;
  subTitle?: string;
}) => {
  const price = await stripe.prices.retrieve(productId);
  const id = price.product as string;
  const product = await stripe.products.retrieve(id);

  const discount = calculatePercentageDiscount(
    parseInt(product.metadata?.first_price),
    parseInt(product.metadata?.first_price_months),
    (price.unit_amount as number) / 100,
    parseInt(product.metadata?.months)
  );

  return (
    <div className="">
      <h3 className="mb-4 text-2xl font-semibold">{product.name}</h3>
      <p className="font-light text-gray-700 sm:text-lg ">
        ${price?.unit_amount! / 100} billed every {product.metadata.months}{" "}
        months{" "}
        {discount > 0 && (
          <span>
            (Save <strong className="font-bold">{discount}%</strong> vs monthly)
          </span>
        )}
        {discount === 0 && <span>Cancel anytime.</span>}
      </p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl font-extrabold">
          $
          {(
            price?.unit_amount! /
            parseInt(product.metadata.months) /
            100
          ).toFixed(2)}
        </span>
        <span className="text-gray-500 ">/month</span>
      </div>
    </div>
  );
};

export const PricingColumn = ({
  productId,
  className = "",
}: {
  productId: string;
  className?: string;
}) => {
  const allFeatures = productFeatures.find((p) => p.id === productId)
    ?.features as string[];

  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg_primary rounded-lg border border-gray-100 shadow  ${className}`}
    >
      <Suspense fallback={<PricingColumnHeaderFallback />}>
        <PricingColumnHeader productId={productId} />
      </Suspense>
      <PricingColumnBody allFeatures={allFeatures} />
      <SubscribeButton planId={productId} />
    </div>
  );
};
