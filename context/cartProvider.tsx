import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
  ReactNode,
} from 'react';
import {
  getCart,
  addToCart,
  removeFromCart,
  updateProductQuantity,
  emptyCart,
} from '@/lib/swell/cart';
import { Cart, CartItem } from 'swell-js';
import { CartCamel, CartItemCamel } from 'swell-js/types/cart/camel';

export type UpdateCart = {
  productId: string;
  quantity: number;
};

export type AddToCart = {
  productId: string;
  quantity?: number;
  purchaseOption?: {
    type: 'standard' | 'subscription';
    planId: string;
  };
};

type CartContext = {
  cart: CartCamel | null;
  loading: boolean;
  error: Error | null;
  price: number;

  addItem: (item: AddToCart) => void;
  removeItem: (id: string) => void;
  updateCart: (id: string, quantity: number) => void;
  clearCart: () => void;
  updateOptimisticPrice: (price: number) => void;
};

const CartContext = createContext<CartContext | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartCamel | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [price, setPrice] = useState(cart?.subTotal ?? 0);
  const [cartItems, setCartItems] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    const fetchCartData = async () => {
      try {
        const cart = await getCart();
        setCart(cart);
        const items = cart?.items?.map(
          (item: CartItemCamel) => item.productId ?? '',
        );
        setCartItems([...items]);
        if (cart?.subTotal) {
          setPrice(cart?.subTotal);
        }
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);

  const updateOptimisticPrice = useCallback(
    (itemPrice: number) => {
      setPrice(price + itemPrice);
    },
    [price],
  );

  const addItem = useCallback(async (item: AddToCart) => {
    setLoading(true);
    try {
      const cart = await addToCart({
        productId: item.productId,
        purchaseOption: item.purchaseOption,
        quantity: item.quantity,
      });
      setCart(cart);
      setLoading(false);
      if (cart?.subTotal) {
        setPrice(cart?.subTotal);
      }
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  }, []);

  const removeItem = useCallback(async (itemId: string) => {
    setLoading(true);
    try {
      const cart = await removeFromCart(itemId);
      setCart(cart);
      setLoading(false);
      if (cart?.subTotal) {
        setPrice(cart?.subTotal);
      }
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  }, []);

  const updateCart = useCallback(
    async (productId: string, quantity: number) => {
      setLoading(true);
      try {
        const cart = await updateProductQuantity({
          productId,
          quantity,
        });
        setCart(cart);
        setLoading(false);
        if (cart?.subTotal) {
          setPrice(cart?.subTotal);
        }
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    },
    [],
  );

  const clearCart = useCallback(async () => {
    setLoading(true);
    try {
      await emptyCart();
      setCart(null);
      setLoading(true);
      setPrice(0);
    } catch (error) {
      setError(error as Error);
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      cart: cart as CartCamel,
      loading,
      error,
      price,
      addItem,
      removeItem,
      updateCart,
      clearCart,
      updateOptimisticPrice,
    }),
    [
      cart,
      loading,
      error,
      price,
      addItem,
      removeItem,
      updateCart,
      clearCart,
      updateOptimisticPrice,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useContext must be used inside a provider with a value');
  }
  return context;
};
