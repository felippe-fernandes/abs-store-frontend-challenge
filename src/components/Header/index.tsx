import { useDrawerStore } from "@/stores/drawerStores";
import HeaderCartButton from "../HeaderCartButton";
import {
  HeaderContainer,
  LogoContainer,
  LogoSubtitle,
  LogoTitle
} from "./styles";

const Header = () => {
  const toggleDrawer = useDrawerStore((action) => action.toggleDrawer);
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoTitle>MKS</LogoTitle>
        <LogoSubtitle>Sistemas</LogoSubtitle>
      </LogoContainer>
      <HeaderCartButton count={0} onClick={toggleDrawer} />
    </HeaderContainer>
  );
};

export default Header;
