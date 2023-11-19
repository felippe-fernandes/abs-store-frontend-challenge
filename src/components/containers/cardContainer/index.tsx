import { useMediaQuery } from "react-responsive";
import { IProduct } from "../../../types/API";
import Card from "../../Card";

interface IProps {
  product: IProduct;
  buyButton: () => void;
}

const CardContainer = ({ product, buyButton }: IProps) => {
  const isMobile = useMediaQuery({ maxWidth: 620 });
  return (
    <Card.Root>
      <Card.Image imageUrl={product.photo} alt={product.name} />
      <Card.Body>
        <Card.BodyTitle title={product.name} />
        <Card.BodyPrice price={product.price} />
        <Card.BodyDescription description={product.description} />
        {isMobile && <Card.CardAction buyButton={buyButton} />}
      </Card.Body>
      {!isMobile && <Card.CardAction buyButton={buyButton} />}
    </Card.Root>
  );
};

export default CardContainer;
