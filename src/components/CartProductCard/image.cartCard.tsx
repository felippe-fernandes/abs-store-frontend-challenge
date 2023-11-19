import Image from "next/image";
import { CartCardImageContainer } from "./styles";

export interface CartCardImageProps {
  imageUrl: string;
  alt: string;
}

const CartCardImage = ({ imageUrl, alt }: CartCardImageProps) => {
  return (
    <CartCardImageContainer>
      <Image src={imageUrl} alt={alt} width={80} height={80} priority />
    </CartCardImageContainer>
  );
};

export default CartCardImage;
