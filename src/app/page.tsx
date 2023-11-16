"use client";

import CardContainer from "@/components/containers/CardContainer";
import { useDrawerStore } from "@/stores/drawerStores";
import { IProduct } from "@/types/API";
import productsMock from "../../mocks";
import { MainContainer, ProductGrid } from "./styles";
import DrawerContainer from "@/components/containers/DrawerContainer";

const Home = () => {
  const { isOpen, toggleDrawer } = useDrawerStore();

  return (
    <MainContainer>
      <ProductGrid>
        {productsMock.products.map((product: IProduct, index: number) => (
          <CardContainer
            key={index}
            product={product}
            handleClickButton={() => console.log("🚀 | product:", product)}
          />
        ))}
      </ProductGrid>
      <DrawerContainer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </MainContainer>
  );
};

export default Home;
