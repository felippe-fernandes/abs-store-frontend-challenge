import { CartCardRootContainer } from "./styles";

interface CartCardRootProps {
  children: React.ReactNode;
}

const CartCardRoot = ({ children }: CartCardRootProps) => {
  return <CartCardRootContainer>{children}</CartCardRootContainer>;
};

export default CartCardRoot;
