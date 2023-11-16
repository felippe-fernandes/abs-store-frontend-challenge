import { CartCardPrice } from "./styles";

export interface CartCardPriceProps {
  price: string;
}

const CartCardProductPrice = ({ price }: CartCardPriceProps) => {
  return (
    <CartCardPrice>
      {parseInt(price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0
      })}
    </CartCardPrice>
  );
};

export default CartCardProductPrice;
