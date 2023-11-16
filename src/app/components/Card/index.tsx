import CardAction from "./action.card";
import CardBody from "./body.card";
import CardBodyDescription from "./bodyDescription.card";
import CardBodyPrice from "./bodyPrice.card";
import CardBodyTitle from "./bodyTitle.card";
import CardImage from "./image.card";
import CardRoot from "./root.card";

const Card = {
  Root: CardRoot,
  Image: CardImage,
  Body: CardBody,
  BodyTitle: CardBodyTitle,
  BodyPrice: CardBodyPrice,
  BodyDescription: CardBodyDescription,
  CardAction: CardAction
};

export default Card;
