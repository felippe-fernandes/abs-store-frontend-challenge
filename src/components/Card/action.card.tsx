import { CardActionContainer, CardActionText } from "./styles";
import { ShoppingBag } from "lucide-react";

export interface CardActionProps {
  buyButton: () => void;
}

const CardAction = ({ buyButton }: CardActionProps) => {
  return (
    <CardActionContainer onClick={buyButton}>
      <ShoppingBag />
      <CardActionText>Comprar</CardActionText>
    </CardActionContainer>
  );
};

export default CardAction;
