import { IProduct, IProductsWithQuantity } from "@/types/API";
import { create } from "zustand";

interface ICartState {
  products: IProductsWithQuantity[];
  increaseQuantity: (product: IProduct) => void;
  decreaseQuantity: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
}

export const useCartStore = create<ICartState>()((set, get) => ({
  products: [],

  increaseQuantity: (product) =>
    set((state) => {
      console.log("🚀 | state:", state.products);
      if (state.products.length === 0) {
        return {
          products: [...state.products, { ...product, quantity: 1 }]
        };
      }
      return {
        products: state.products.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: (item.quantity || 0) + 1 };
          }
          return item;
        })
      };
    }),

  decreaseQuantity: (product) =>
    set((state) => ({
      products: state.products.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity || 0) - 1 };
        }
        return item;
      })
    })),
  removeProduct: (product) =>
    set((state) => ({
      products: state.products?.filter((item) => item.id !== product.id)
    }))
}));
