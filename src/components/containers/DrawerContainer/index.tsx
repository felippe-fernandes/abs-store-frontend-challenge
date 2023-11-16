import CartProducts from "@/components/CartProducts";
import DrawerComponent from "@/components/Drawer";
import {
  Drawer,
  DrawerBodyContainer,
  // Drawer,
  DrawerFooterContainer,
  DrawerHeaderCloseButton,
  DrawerHeaderContainer,
  DrawerHeaderTitle,
  DrawerTotalPriceContainer,
  DrawerTotalPriceText,
  DrawerTotalPriceValue
} from "./styles";
import { useCartStore } from "@/stores/cartStore";

export interface IProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerContainer = ({ isOpen, toggleDrawer }: IProps) => {
  const cartProducts = useCartStore((state) => state.products);
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
          <CartProducts products={cartProducts} />
        </DrawerBodyContainer>
        <DrawerTotalPriceContainer>
          <DrawerTotalPriceText>Total de compras</DrawerTotalPriceText>
          <DrawerTotalPriceValue>
            {cartProducts
              .reduce((accumulator, product) => {
                return (
                  accumulator +
                  parseFloat(product.price) * (product.quantity || 1)
                );
              }, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0
              })}
          </DrawerTotalPriceValue>
        </DrawerTotalPriceContainer>
        <DrawerFooterContainer onClick={() => console.log("cliquei")}>
          Finalizar Compra
        </DrawerFooterContainer>
      </Drawer>
    </DrawerComponent>
  );
};

export default DrawerContainer;
