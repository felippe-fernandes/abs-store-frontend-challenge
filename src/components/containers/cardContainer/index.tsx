import { IProduct } from "../../../types/API";
import Card from "../../Card";

interface IProps {
  product: IProduct;
  buyButton: () => void;
}

const CardContainer = ({ product, buyButton }: IProps) => {
  return (
    <Card.Root>
      <Card.Image imageUrl={product.photo} alt={product.name} />
      <Card.Body>
        <Card.BodyTitle title={product.name} />
        <Card.BodyPrice price={product.price} />
        <Card.BodyDescription description={product.description} />
      </Card.Body>
      <Card.CardAction buyButton={buyButton} />
    </Card.Root>
  );
};

export default CardContainer;
