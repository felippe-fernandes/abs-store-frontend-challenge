export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface IResponse {
  products: IProduct[];
  count: number;
}

export type IProductsWithQuantity = IProduct & { quantity?: number };
