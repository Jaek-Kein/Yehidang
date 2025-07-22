import styled from "@emotion/styled";
import { useState } from "react";
import data from "./data.json";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 중요 */
  overflow: hidden; /* 추가 */
`;

const SelectorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  font-size: 14px;
  align-items: center;
  justify-items: center;
`;
const SelectorButton = styled.button<{ selection: boolean }>`
  width: 100%;
  height: 100%;
  padding: 5% 0;
  border-radius: 10px;
  background-color: ${({ selection }) => (selection ? "gray" : "white")};
  color: ${({ selection }) => (selection ? "white" : "black")};
  transition: all 0.2s cubic-bezier(0.5, 0, 0.2, 1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
  }
`;

const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 20px;
  -webkit-overflow-scrolling: touch;
`;

const ProductGridRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  grid-auto-rows: 115px;
  gap: 10px;
  padding: 20px;
  min-height: calc(100% - 40px);

  align-items: start;
  justify-items: center;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ProductPhoto = styled.div`
  width: 100%;
  max-height: 100px;
  aspect-ratio: 1 / 1;
  background-color: black;
`;

const ProductName = styled.div`
  font-size: 12px;
`;

function MenuCatalog() {
  const [activeCategory, setActiveCategory] = useState("전체");
  // 선택된 카테고리에 따라 제품 필터링
  const filteredProducts =
    activeCategory === "전체"
      ? data.Product
      : data.Product.filter((item) => item.Type === activeCategory);

  // 고유한 타입들 추출
  const categories = [
    "전체",
    ...new Set(data.Product.map((item) => item.Type)),
  ];

  return (
    <Wrapper>
      <SelectorWrapper>
        {categories.map((category, index) => (
          <SelectorButton
            key={index}
            selection={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </SelectorButton>
        ))}
      </SelectorWrapper>
      <ProductContainer>
        <ProductGridRow>
          {filteredProducts.map((product, index) => (
            <ProductCard key={index}>
              <ProductPhoto></ProductPhoto>
              <ProductName>{product.Name}</ProductName>
            </ProductCard>
          ))}
        </ProductGridRow>
      </ProductContainer>
    </Wrapper>
  );
}

export default MenuCatalog;
