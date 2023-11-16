import { CartCardTitle } from "./styles";

export interface CartCardTitleProps {
  title: string;
}

const CartCardProductTitle = ({ title }: CartCardTitleProps) => {
  return <CartCardTitle>{title}</CartCardTitle>;
};

export default CartCardProductTitle;
