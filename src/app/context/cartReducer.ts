import type { CartItem } from '@/features/Cart';

type CartState = {
  cartItems: CartItem[];
};

type CartActions =
  | { type: 'ADD_TO_CART'; product: Omit<CartItem, 'quantity'> }
  | { type: 'CHANGE_QUANTITY'; productId: number; quantity: number }
  | { type: 'REMOVE_ITEM'; productId: number };

export const cartReducer = (state: CartState, action: CartActions) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product } = action;
      const { cartItems } = state;
      const existing = cartItems.find((item) => item.id === product.id);

      // Increase quantity if item already in cart
      if (existing) {
        return {
          ...state,
          cartItems: cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // Otherwise, add with quantity
      return {
        ...state,
        cartItems: [...cartItems, { ...product, quantity: 1 }],
      };
    }

    case 'CHANGE_QUANTITY': {
      const { productId, quantity } = action;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.productId
        ),
      };
    }

    default: {
      return state;
    }
  }
};
