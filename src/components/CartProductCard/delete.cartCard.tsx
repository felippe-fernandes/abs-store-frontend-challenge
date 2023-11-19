import { DeleteButton } from "./styles";

export interface IProps {
  handleDeleteItem: () => void;
}

const CartDeleteItem = ({ handleDeleteItem }: IProps) => {
  return <DeleteButton onClick={handleDeleteItem}>X</DeleteButton>;
};

export default CartDeleteItem;
