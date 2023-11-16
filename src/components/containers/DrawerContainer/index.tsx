import { useDrawerStore } from "@/stores/drawerStores";
import {
  DrawerBodyContainer,
  Drawer,
  DrawerFooterContainer,
  DrawerHeaderContainer,
  DrawerHeaderTitle,
  DrawerHeaderCloseButton,
  DrawerTotalPriceContainer
} from "./styles";
import CartProducts from "@/components/CartProducts";

const DrawerContainer = () => {
  const toggleDrawer = useDrawerStore((state) => state.toggleDrawer);
  return (
    <Drawer>
      <DrawerHeaderContainer>
        <DrawerHeaderTitle>
          Carrinho <br /> de compras
        </DrawerHeaderTitle>
        <DrawerHeaderCloseButton onClick={toggleDrawer}>
          X
        </DrawerHeaderCloseButton>
      </DrawerHeaderContainer>
      <DrawerBodyContainer>
        <CartProducts />
      </DrawerBodyContainer>
      <DrawerTotalPriceContainer>
        <span>Total de compras</span>
        <span>R$878</span>
      </DrawerTotalPriceContainer>
      <DrawerFooterContainer onClick={() => console.log("cliquei")}>
        Finalizar Compra
      </DrawerFooterContainer>
    </Drawer>
  );
};

export default DrawerContainer;
