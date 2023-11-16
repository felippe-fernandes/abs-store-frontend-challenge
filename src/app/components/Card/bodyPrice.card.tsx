import { CardProductPrice } from "./styles";

export interface CardBodyPriceProps {
  price: string;
}

function CardBodyPrice({ price }: CardBodyPriceProps) {
  return (
    <CardProductPrice>
      {parseInt(price).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 0
      })}
    </CardProductPrice>
  );
}

export default CardBodyPrice;
