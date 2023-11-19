import CartProductCard from "@/components/CartProductCard";
import { useCartStore } from "@/stores/cartStore";
import { IProductsWithQuantity } from "@/types/API";

export interface IProps {
  product: IProductsWithQuantity;
}

const CartCardContainer = ({ product }: IProps) => {
  const incCounter = useCartStore((action) => action.increaseQuantity);
  const decCounter = useCartStore((action) => action.decreaseQuantity);
  const deleteItem = useCartStore((action) => action.removeProduct);
  return (
    <CartProductCard.Root>
      <CartProductCard.Image imageUrl={product.photo} alt={product.name} />
      <CartProductCard.Title title={product.name} />
      <CartProductCard.Buttons
        counter={product.quantity!}
        incCounter={() => incCounter(product)}
        decCounter={() => decCounter(product)}
      />
      <CartProductCard.Price price={product.price} />
      <CartProductCard.Delete handleDeleteItem={() => deleteItem(product)} />
    </CartProductCard.Root>
  );
};

export default CartCardContainer;
