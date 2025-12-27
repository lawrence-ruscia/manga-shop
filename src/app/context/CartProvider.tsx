/* eslint-disable react-refresh/only-export-components */
import type { CartItem } from '@/features/Cart';
import toast from 'react-hot-toast';
import { createContext, use, useReducer } from 'react';
import { cartReducer } from './cartReducer';

export type CartValues = {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  changeQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  handleCheckout: () => void;
};

const CartContext = createContext<CartValues | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const { cartItems } = cartState;

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_TO_CART', product });

    toast.success(`${product.title} added to cart`);
  };

  const changeQuantity = (productId: number, quantity: number) => {
    const safeQuantity = Math.max(1, quantity);

    dispatch({ type: 'CHANGE_QUANTITY', productId, quantity: safeQuantity });
  };

  const removeItem = (productId: number) => {
    dispatch({ type: 'REMOVE_ITEM', productId });

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
