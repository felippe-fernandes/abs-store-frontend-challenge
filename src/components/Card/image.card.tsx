import Image from "next/image";
import { CardImageContainer } from "./styles";

export interface CardImageProps {
  imageUrl: string;
  alt: string;
}

const CardImage = ({ imageUrl, alt }: CardImageProps) => {
  return (
    <CardImageContainer>
      <Image src={imageUrl} alt={alt} width={128} height={128} priority />
    </CardImageContainer>
  );
};

export default CardImage;