/* eslint-disable react-refresh/only-export-components */
import type { CartItem } from '@/features/Cart';
import toast from 'react-hot-toast';
import { createContext, use, useState } from 'react';

export type CartValues = {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  changeQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  handleCheckout: () => void;
};

const CartContext = createContext<CartValues | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      // Increase quantity if item already in cart
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Otherwise, add with quantity
      return [...prev, { ...product, quantity: 1 }];
    });

    toast.success(`${product.title} added to cart`);
  };

  const changeQuantity = (productId: number, quantity: number) => {
    const safeQuantity = Math.max(1, quantity);

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: safeQuantity } : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    const item = cartItems.find((i) => i.id === productId);
    toast.success(`${item?.title} removed`);
  };

  const handleCheckout = () => {
    toast('Checkout coming soon!', {
      icon: '🚀',
      duration: 2500,
    });
  };

  const cartValues: CartValues = {
    cartItems,
    addToCart,
    changeQuantity,
    removeItem,
    handleCheckout,
  };

  return <CartContext value={cartValues}>{children}</CartContext>;
};

export const useCart = () => {
  const context = use(CartContext);

  if (!context) throw new Error('useCart must be used within a CartProvider.');

  return context;
};
