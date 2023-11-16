"use client";

import CardContainer from "@/components/containers/cardContainer";
import productsMock from "../../mocks";
import { MainContainer, ProductGrid } from "./styles";
import { IProduct } from "@/types/API";

const Home = () => {
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
    </MainContainer>
  );
};

export default Home;
