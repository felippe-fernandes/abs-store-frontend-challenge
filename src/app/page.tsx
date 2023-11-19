"use client";

import { useDrawerStore } from "@/stores/drawerStores";
import { IProduct } from "@/types/API";
import productsMock from "../../mocks";
import { MainContainer, ProductGrid } from "./styles";
import DrawerContainer from "@/components/containers/DrawerContainer";
import { useCartStore } from "@/stores/cartStore";
import CardContainer from "@/components/containers/cardContainer";

const Home = () => {
  const { isOpen, toggleDrawer } = useDrawerStore();
  const addItemToCart = useCartStore((action) => action.increaseQuantity);

  return (
    <MainContainer>
      <ProductGrid>
        {productsMock.products.map((product: IProduct, index: number) => (
          <CardContainer
            key={index}
            product={product}
            buyButton={() => addItemToCart(product)}
          />
        ))}
      </ProductGrid>
      <DrawerContainer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </MainContainer>
  );
};

export default Home;
