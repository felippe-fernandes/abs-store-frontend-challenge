import CartProductCard from "@/components/CartProductCard";
import { IProduct } from "@/types/API";

export interface IProps {
  product: IProduct;
}

const CartCardContainer = ({ product }: IProps) => {
  return (
    <CartProductCard.Root>
      <CartProductCard.Image imageUrl={product.photo} alt={product.name} />
      <CartProductCard.Title title={product.name} />
      <CartProductCard.Buttons />
      <CartProductCard.Price price={product.price} />
      <CartProductCard.Delete />
    </CartProductCard.Root>
  );
};

export default CartCardContainer;
