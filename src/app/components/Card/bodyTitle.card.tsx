import { CardProductTitle } from "./styles";

export interface CardBodyTitleProps {
  title: string;
}

function CardBodyTitle({ title }: CardBodyTitleProps) {
  return <CardProductTitle>{title}</CardProductTitle>;
}

export default CardBodyTitle;
