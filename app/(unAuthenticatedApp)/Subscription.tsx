import Button from '@/components/Button';
import { TickIcon } from '@/components/icons';
import { calculatePercentageDiscount } from '@/utils/calculateDiscount';
import { productFeatures, services } from '@/utils/pricingData';
import { stripe } from '@/utils/stripe';

const PricingColumnHeader = ({
  price,
  name,
  interval,
  discount,
  totalPrice,
  months,
}: {
  price: string;
  name: string;
  interval: string;
  months: number;
  discount: number;
  totalPrice: number;
}) => {
  return (
    <div className=''>
      <h3 className='mb-4 text-2xl font-semibold'>{name}</h3>
      <p className='font-light text-gray-700 sm:text-lg '>
        ${totalPrice} billed every {months} months{' '}
        {discount > 0 && (
          <span>
            (Save <strong className='font-bold'>{discount}%</strong> vs monthly)
          </span>
        )}
        {discount === 0 && <span>Cancel anytime.</span>}
      </p>
      <div className='flex justify-center items-baseline my-8'>
        <span className='mr-2 text-5xl font-extrabold'>${price}</span>
        <span className='text-gray-500 '>/month</span>
      </div>
    </div>
  );
};

interface IPricingColumn {
  className?: string;
  features: string[];
  interval: string;
  price: number;
  name: string;
  months: number;
  discount: number;

  services?: {
    id: number;
    label: string;
    price: number;
  }[];
}

export const PricingColumn = ({
  className,
  services,
  name,
  months,
  price,
  interval = 'One time',
  features,
  discount,
}: IPricingColumn) => {
  const calculatedPrice =
    services
      ?.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0)
      .toFixed(2) ?? (price / (100 * months)).toFixed(2);

  const allFeatures = services?.map((f) => f.label) ?? features;

  return (
    <div
      className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg_primary rounded-lg border border-gray-100 shadow  ${className}`}
    >
      <PricingColumnHeader
        interval={interval}
        name={name}
        price={calculatedPrice}
        totalPrice={price / 100}
        months={months}
        discount={discount}
      />
      <ul role='list' className='mb-8 space-y-4 text-left'>
        {allFeatures.map((service, index) => (
          <li key={index} className='flex items-center space-x-3'>
            <TickIcon />
            <span>{service}</span>
          </li>
        ))}
      </ul>
      <Button
        className='flex justify-center'
        href='/'
        type='link'
        outline={true}
      >
        Get started
      </Button>
    </div>
  );
};

const Subscription = async () => {
  const { data } = await stripe.prices.list();

  const prices = data.reverse();

  const plans = await Promise.all(
    prices.map(async (price) => {
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
          parseInt(product.metadata?.months),
        ),
        interval: price.recurring?.interval as string,
        currency: price.currency,
        features: productFeatures.find((p) => p.id === id)
          ?.features as string[],
      };
    }),
  );

  return (
    <section id='subscription'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
        <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
          {plans.map((plan) => (
            <PricingColumn
              months={plan.months}
              key={plan.id}
              name={plan.name}
              price={plan.price}
              interval={plan.interval}
              features={plan.features}
              discount={plan.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
