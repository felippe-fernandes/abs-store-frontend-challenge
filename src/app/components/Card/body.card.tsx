import { CardBodyContainer } from "./styles";

export interface CardBodyProps {
  children: React.ReactNode;
}

function CardBody({ children }: CardBodyProps) {
  return <CardBodyContainer>{children}</CardBodyContainer>;
}

export default CardBody;
