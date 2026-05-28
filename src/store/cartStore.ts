import { create } from "zustand";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export type CartItem = Product & {
  quantity: number;
};

export interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      if (!product) return state;

      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (productId: number) =>
    set((state) => ({
      ...state,
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  updateQuantity: (productId: number, quantity: number) =>
    set((state) => {
      if (quantity < 0) return state;

      if (quantity === 0) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== productId),
        };
      }

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item,
        ),
      };
    }),
  clearCart: () =>
    set((state) => ({
      ...state,
      cart: [],
    })),
}));
