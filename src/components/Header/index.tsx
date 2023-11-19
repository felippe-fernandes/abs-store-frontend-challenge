import { useDrawerStore } from "@/stores/drawerStores";
import HeaderCartButton from "../HeaderCartButton";
import {
  HeaderContainer,
  LogoContainer,
  LogoSubtitle,
  LogoTitle
} from "./styles";
import { useCartStore } from "@/stores/cartStore";

const Header = () => {
  const toggleDrawer = useDrawerStore((action) => action.toggleDrawer);
  const itemsInCart = useCartStore((state) =>
    state.cartProducts.reduce((acc, curr) => acc + curr.quantity!, 0)
  );
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoTitle>ABS</LogoTitle>
        <LogoSubtitle>Store</LogoSubtitle>
      </LogoContainer>
      <HeaderCartButton count={itemsInCart} onClick={toggleDrawer} />
    </HeaderContainer>
  );
};

export default Header;
