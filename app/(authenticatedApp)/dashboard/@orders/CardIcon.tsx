'use client';
import MasterCardIcon from '@/public/pay-icons/mastercard.svg';
import PaypalIcon from '@/public/pay-icons/paypal.svg';
import VisaCardIcon from '@/public/pay-icons/visa.svg';
import Image from 'next/image';

const CardIcon = ({ brand }: { brand: string | undefined }) => {
  if (brand === 'MasterCard')
    return <Image src={MasterCardIcon} alt={brand} className='w-6 h-6' />;
  if (brand === 'Paypal')
    return <Image src={PaypalIcon} alt={brand} className='w-6 h-6' />;
  if (brand === 'Visa')
    return <Image src={VisaCardIcon} alt={brand} className='w-6 h-6' />;
  return <span>{brand}</span>;
};

export default CardIcon;
