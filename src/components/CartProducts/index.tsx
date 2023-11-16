import { IProduct } from "@/types/API";
import CartCardContainer from "../containers/CartCardContainer";
import { CartProductsContainer } from "./styles";
export interface IProps {
  products: IProduct[];
}

const CartProducts = ({ products }: IProps) => {
  console.log("🚀 | products:", products);
  return (
    <CartProductsContainer>
      {products.slice(0, 5).map((product) => (
        <CartCardContainer key={product.id} product={product} />
      ))}
    </CartProductsContainer>
  );
};

export default CartProducts;
