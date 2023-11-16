import { CardProductDescription } from "./styles";

export interface CardBodyDescriptionProps {
  description: string;
}

function CardBodyDescription({ description }: CardBodyDescriptionProps) {
  return (
    <CardProductDescription title={description}>
      {description}
    </CardProductDescription>
  );
}

export default CardBodyDescription;
