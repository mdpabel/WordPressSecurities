import { getUser } from '@/swell/account.server';
import CreditCard from './CreditCard';

const page = async () => {
  const user = await getUser();

  const card = user?.billing?.card;

  const brand = card?.brand!;
  const last4 = card?.last4!;
  const cardHolder = user?.name!;
  const expiry = card?.expMonth + '/' + card?.expYear?.toString().slice(2);

  return (
    <CreditCard
      brand={brand}
      cardHolder={cardHolder}
      expiryDate={expiry}
      last4={last4}
    />
  );
};

export default page;
