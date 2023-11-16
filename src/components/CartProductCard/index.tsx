import CartCardCounterButton from "./counterButton.cartCard";
import CartDeleteItem from "./delete.cartCard";
import CartCardImage from "./image.cartCard";
import CartCardProductPrice from "./price.cartCard";
import CartCardRoot from "./root.cartCard";
import CartCardProductTitle from "./title.cartCard";

// };
const CartProductCard = {
  Root: CartCardRoot,
  Image: CartCardImage,
  Title: CartCardProductTitle,
  Buttons: CartCardCounterButton,
  Price: CartCardProductPrice,
  Delete: CartDeleteItem
};

export default CartProductCard;
