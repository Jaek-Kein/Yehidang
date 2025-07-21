/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import useSwipe from "../hooks/useSwipe";
import FirstPage from "../components/FirstPage/FirstPage";
import SecondPage from "../components/SecondPage/SecondPage";
import MenuPage from "../components/MenuPage/MenuPage";

const lastPage = 2;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: transparent;
`;

const PageContainer = styled.div<{ page: number }>`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Page = styled.div<{
  isActive: boolean;
  isNext: boolean;
  isPrev: boolean;
}>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: scale(0.8);
  opacity: 0;
  z-index: 1;

  /* 현재 활성 페이지 */
  ${({ isActive }) =>
    isActive &&
    `
    transform: scale(1);
    opacity: 1;
    z-index: 10;
  `}

  /* 다음에 나올 페이지 (뒤에 대기) */
  ${({ isNext }) =>
    isNext &&
    `
    transform: scale(0.8);
    opacity: 0;
    z-index: 9;
  `}
  
  /* 이전 페이지 (확대되며 사라짐) */
  ${({ isPrev }) =>
    isPrev &&
    `
    transform: scale(1.3);
    opacity: 0;
    z-index: 8;
  `}
`;

const MainView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  useSwipe({
    containerRef,
    page,
    setPage,
    lastPage,
    threshold: 50,
  });

  const pages = [<FirstPage />, <SecondPage />, <MenuPage />];

  //font name : yeon sung, stylish, diphylleia

  return (
    <Wrapper>
      <PageContainer ref={containerRef} page={page}>
        {pages.map((content, index) => (
          <Page
            key={index}
            isActive={index === page}
            isNext={index === page + 1}
            isPrev={index === page - 1}
          >
            {content}
          </Page>
        ))}
      </PageContainer>
    </Wrapper>
  );
};

export default MainView;
