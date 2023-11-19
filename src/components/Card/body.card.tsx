import { CardBodyContainer } from "./styles";

export interface CardBodyProps {
  children: React.ReactNode;
}

const CardBody = ({ children }: CardBodyProps) => {
  return <CardBodyContainer>{children}</CardBodyContainer>;
};

export default CardBody;
