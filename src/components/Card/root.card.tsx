import { CardRootContainer } from "./styles";

interface CardRootProps {
  children: React.ReactNode;
}

const CardRoot = ({ children }: CardRootProps) => {
  return <CardRootContainer>{children}</CardRootContainer>;
};

export default CardRoot;
