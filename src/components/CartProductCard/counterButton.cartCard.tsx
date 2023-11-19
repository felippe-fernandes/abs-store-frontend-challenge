import {
  CartCardCounterButtonContainer,
  Counter,
  ToggleQuantityButton
} from "./styles";

export interface IProps {
  counter: number;
  incCounter: () => void;
  decCounter: () => void;
}

const CartCardCounterButton = ({ counter, incCounter, decCounter }: IProps) => {
  return (
    <CartCardCounterButtonContainer>
      <ToggleQuantityButton onClick={decCounter}>-</ToggleQuantityButton>
      <Counter>{counter}</Counter>
      <ToggleQuantityButton onClick={incCounter}>+</ToggleQuantityButton>
    </CartCardCounterButtonContainer>
  );
};

export default CartCardCounterButton;
