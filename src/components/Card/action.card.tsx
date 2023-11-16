import ShoppingBag from "@/assets/ShoppingBag";
import { CardActionContainer } from "./styles";

export interface CardActionProps {
  buyButton: () => void;
}

const CardAction = ({ buyButton }: CardActionProps) => {
  return (
    <CardActionContainer onClick={buyButton}>
      <ShoppingBag />
      Comprar
    </CardActionContainer>
  );
};

export default CardAction;
