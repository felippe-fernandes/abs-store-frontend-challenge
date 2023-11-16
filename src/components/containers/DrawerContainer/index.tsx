import { useDrawerStore } from "@/stores/drawerStores";
import {
  DrawerBodyContainer,
  // Drawer,
  DrawerFooterContainer,
  DrawerHeaderContainer,
  DrawerHeaderTitle,
  DrawerHeaderCloseButton,
  DrawerTotalPriceContainer,
  DrawerTotalPriceValue,
  DrawerTotalPriceText,
  Drawer
} from "./styles";
import CartProducts from "@/components/CartProducts";
import productsMock from "../../../../mocks";
import DrawerComponent from "@/components/Drawer";

export interface IProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerContainer = ({ isOpen, toggleDrawer }: IProps) => {
  return (
    <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer}>
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
          <CartProducts products={productsMock.products} />
        </DrawerBodyContainer>
        <DrawerTotalPriceContainer>
          <DrawerTotalPriceText>Total de compras</DrawerTotalPriceText>
          <DrawerTotalPriceValue>R$878</DrawerTotalPriceValue>
        </DrawerTotalPriceContainer>
        <DrawerFooterContainer onClick={() => console.log("cliquei")}>
          Finalizar Compra
        </DrawerFooterContainer>
      </Drawer>
    </DrawerComponent>
  );
};

export default DrawerContainer;
