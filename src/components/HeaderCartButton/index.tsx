import CartIcon from "@/assets/CartIcon";
import { ButtonContainer, CartNumber } from "./styles";

interface Props {
  count: number;
  onClick: () => void;
}

const HeaderCartButton = ({ count, onClick }: Props) => {
  return (
    <ButtonContainer onClick={onClick}>
      <CartIcon />
      <CartNumber>{count}</CartNumber>
    </ButtonContainer>
  );
};

export default HeaderCartButton;
