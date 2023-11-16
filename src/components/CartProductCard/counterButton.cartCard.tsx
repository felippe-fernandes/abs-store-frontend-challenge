import {
  CartCardCounterButtonContainer,
  Counter,
  ToggleQuantityButton
} from "./styles";

const CartCardCounterButton = () => {
  return (
    <CartCardCounterButtonContainer>
      <ToggleQuantityButton>-</ToggleQuantityButton>
      <Counter>1</Counter>
      <ToggleQuantityButton>+</ToggleQuantityButton>
    </CartCardCounterButtonContainer>
  );
};

export default CartCardCounterButton;
