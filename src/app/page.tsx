"use client";

import Drawer from "@/components/Drawer";
import CardContainer from "@/components/containers/cardContainer";
import { useDrawerStore } from "@/stores/drawerStores";
import { IProduct } from "@/types/API";
import productsMock from "../../mocks";
import { MainContainer, ProductGrid } from "./styles";

const Home = () => {
  const isOpen = useDrawerStore((state) => state.isOpen);
  const toggle = useDrawerStore((state) => state.toggleDrawer);
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
      <Drawer isOpen={isOpen}>
        <button onClick={toggle}>Teste</button>
      </Drawer>
    </MainContainer>
  );
};

export default Home;
