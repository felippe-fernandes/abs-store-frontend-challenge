import { useMediaQuery } from "react-responsive";
import {
  ButtonContainer,
  CartCountMobileWrapper,
  CartNumber,
  StyledCartIcon
} from "./styles";

interface Props {
  count: number;
  onClick: () => void;
}

const HeaderCartButton = ({ count, onClick }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 620 });
  return (
    <ButtonContainer onClick={onClick}>
      <StyledCartIcon />
      {!isMobile ? (
        <CartNumber>{count}</CartNumber>
      ) : (
        <CartCountMobileWrapper>
          <CartNumber>{count}</CartNumber>
        </CartCountMobileWrapper>
      )}
    </ButtonContainer>
  );
};

export default HeaderCartButton;
