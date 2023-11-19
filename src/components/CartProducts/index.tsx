import { IProduct } from "@/types/API";
import CartCardContainer from "../containers/CartCardContainer";
import { CartProductsContainer } from "./styles";
export interface IProps {
  products: IProduct[];
}

const CartProducts = ({ products }: IProps) => {
  return (
    <CartProductsContainer>
      {products.map((product) => (
        <CartCardContainer key={product.id} product={product} />
      ))}
    </CartProductsContainer>
  );
};

export default CartProducts;
