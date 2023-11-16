import ShoppingBag from "@/assets/ShoppingBag";
import { CardActionContainer } from "./styles";

export interface CardActionProps {
  handleClickButton: () => void;
}

const CardAction = ({ handleClickButton }: CardActionProps) => {
  return (
    <CardActionContainer onClick={handleClickButton}>
      <ShoppingBag />
      Comprar
    </CardActionContainer>
  );
};

export default CardAction;
