/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import MenuCarousel from "./MenuCarousel";
import MenuCatalog from "./MenuCatalog";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 15% 10%;
  display: flex;
  flex-direction: column;
  gap: 2%;
  background: linear-gradient(to bottom, gray 0%, white 40%);
`;
// const gradient = css`
//   background: linear-gradient(to Bottom, white 70%, black 100%);
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

function MenuPage() {
  return (
    <Wrapper>
      제품
      <MenuCarousel />
      <MenuCatalog />
    </Wrapper>
  );
}

export default MenuPage;
