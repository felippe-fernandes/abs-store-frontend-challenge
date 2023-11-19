import { IProduct, IProductsWithQuantity } from "@/types/API";
import { create } from "zustand";

interface ICartState {
  cartProducts: IProductsWithQuantity[];
  increaseQuantity: (product: IProduct) => void;
  decreaseQuantity: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
}

export const useCartStore = create<ICartState>()((set) => ({
  cartProducts: [],

  increaseQuantity: (cartProduct) =>
    set((state) => {
      if (state.cartProducts.some((item) => item.id === cartProduct.id)) {
        return {
          cartProducts: state.cartProducts.map((item) => {
            if (item.id === cartProduct.id) {
              return { ...item, quantity: (item.quantity || 0) + 1 };
            }
            return item;
          })
        };
      }
      return {
        cartProducts: [...state.cartProducts, { ...cartProduct, quantity: 1 }]
      };
    }),

  decreaseQuantity: (product) =>
    set((state) => ({
      cartProducts: state.cartProducts.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity || 0) - 1 };
        }
        return item;
      })
    })),
  removeProduct: (product) =>
    set((state) => ({
      cartProducts: state.cartProducts?.filter((item) => item.id !== product.id)
    }))
}));
