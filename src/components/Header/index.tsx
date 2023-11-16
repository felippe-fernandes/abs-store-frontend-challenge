import CartButton from "../CartButton";
import {
  HeaderContainer,
  LogoContainer,
  LogoSubtitle,
  LogoTitle
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoTitle>MKS</LogoTitle>
        <LogoSubtitle>Sistemas</LogoSubtitle>
      </LogoContainer>
      <CartButton count={0} onClick={() => console.log("cliquei")} />
    </HeaderContainer>
  );
};

export default Header;
