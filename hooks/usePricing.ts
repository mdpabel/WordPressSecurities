import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useCart } from '@/zustand/cart';
import { generateToken } from '@/app/(unAuthenticatedApp)/_actions';
import { login, loginWithToken } from '@/swell/account';

type Service = {
  id: string;
  title: string;
  price: number;
};

type UsePricingProps = {
  services: Service[];
};

type UsePricingResult = {
  loading: boolean;
  price: number;
  selectedServices: Service[];
  showBuyNowButton: boolean;
  showCreateAccountButton: boolean;
  showCouponComponent: boolean;
  handlePayment: () => Promise<void>;
};

export const usePricing = ({ services }: UsePricingProps): UsePricingResult => {
  const { cart, getCart, clearCart } = useCart();
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCart();
  }, []);

  const handlePayment = async () => {
    setLoading(true);

    if (!isSignedIn || !isLoaded) return;

    if (!cart?.accountLoggedIn) {
      const email = user?.primaryEmailAddress?.emailAddress as string;
      await loginWithToken(email);
      await getCart();
    }

    if (cart?.checkoutUrl) {
      router.push(cart?.checkoutUrl);
    }

    setLoading(false);
  };

  const cartItems = cart?.items?.map((item: any) => item.productId as string);
  const selectedServices = services.filter(
    (service) => cartItems?.includes(service.id),
  );
  const discount = cart?.itemDiscount ?? 0;
  const subTotal = cart?.subTotal ?? 0;
  const price = subTotal - discount;
  const showBuyNowButton = Boolean(isSignedIn);
  const showCreateAccountButton = Boolean(!isSignedIn);
  const showCouponComponent = Boolean(
    cartItems && cartItems?.length > 0 && price > 0,
  );

  return {
    loading,
    price,
    selectedServices,
    showBuyNowButton,
    showCreateAccountButton,
    showCouponComponent,
    handlePayment,
  };
};
