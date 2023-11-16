"use client";

import Card from "./components/Card";
import productsMock from "../../mocks";
import CardContainer from "./components/containers/cardContainer";
import { MainContainer, ProductGrid } from "./styles";

export default function Home() {
  return (
    <MainContainer>
      <ProductGrid>
        {productsMock.products.map((product, index) => (
          <CardContainer key={index} product={product} />
        ))}
      </ProductGrid>
    </MainContainer>
  );
}
