import { IProduct } from "../../../../../types/API";
import Card from "../../Card";

interface IProps {
  product: IProduct;
}

const CardContainer = ({ product }: IProps) => {
  return (
    <Card.Root>
      <Card.Image imageUrl={product.photo} alt={product.name} />
      <Card.Body>
        <Card.BodyTitle title={product.name} />
        <Card.BodyPrice price={product.price} />
        <Card.BodyDescription description={product.description} />
      </Card.Body>
      <Card.CardAction
        handleClickButton={() => console.log("🚀 | product:", product)}
      />
    </Card.Root>
  );
};

export default CardContainer;
