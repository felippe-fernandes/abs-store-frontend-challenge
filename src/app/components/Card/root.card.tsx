import { CardRootContainer } from "./styles";

interface CardRootProps {
  children: React.ReactNode;
}

function CardRoot({ children }: CardRootProps) {
  return <CardRootContainer>{children}</CardRootContainer>;
}

export default CardRoot;
