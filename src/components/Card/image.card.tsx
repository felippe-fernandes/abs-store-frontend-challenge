import Image from "next/image";
import { CardImageContainer } from "./styles";
import { useMediaQuery } from "react-responsive";

export interface CardImageProps {
  imageUrl: string;
  alt: string;
}

const CardImage = ({ imageUrl, alt }: CardImageProps) => {
  const isMobile = useMediaQuery({ maxWidth: 620 });
  return (
    <CardImageContainer>
      <Image
        src={imageUrl}
        alt={alt}
        width={!isMobile ? 110 : 96}
        height={!isMobile ? 110 : 96}
        priority
      />
    </CardImageContainer>
  );
};

export default CardImage;
