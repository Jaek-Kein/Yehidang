/** @jsxImportSource @emotion/react */
import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { MainPink, WheatGold } from "../style/colors";
import MainTempCarousel from "../components/mainTempCarousel";
import { FaArrowAltCircleDown } from "react-icons/fa";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
`;

const PageContainer = styled.div`
    height: 100vh;
    width: 100%;
    /* 애니메이션 */
    transition: transform 0.7s ease-in-out;
`;

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background-color: ${MainPink};
`;
const TextArea = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    padding-bottom: 0px;
    height: 100%;

    @font-face {
        font-family: "kdg_Medium";
        src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/kdg_Medium.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }
    font-family: "kdg_Medium";
`;

const Title = styled.h1`
    color: ${WheatGold};
`;

const TextWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff73;
    padding: 10px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 10px;
    border: 1px solid lightgray;
`;
const imagecss = css`
    position: fixed;
    height: 100vh;
    width: 100%; /* 배경을 화면 전체로 채움 */
    overflow: hidden;
    left: 0;
    top: 0;
    z-index: 0; /* 배경으로 보내기 */
    border: 2px solid ${MainPink};
    box-sizing: border-box;
`;

const FirstPageWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    background-color: ${MainPink};
    min-height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    box-sizing: border-box;
`;

const Downbutton = styled.div`
    display: flex;
    padding-bottom: 20px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1000;
`;

const MainTemp2: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [page, setPage] = useState(0);
    const lastPage = 2;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let touchStartY = 0;
        let touchEndY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndY = e.changedTouches[0].clientY;
            handleSwipe();
        };

        const handleSwipe = () => {
            const deltaY = touchStartY - touchEndY;
            const threshold = 50; // 스와이프 감도

            if (deltaY > threshold) {
                // 위로 스와이프 - 다음 페이지
                setPage((prev) => Math.min(prev + 1, lastPage));
            } else if (deltaY < -threshold) {
                // 아래로 스와이프 - 이전 페이지
                setPage((prev) => Math.max(prev - 1, 0));
            }
        };

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                setPage((prev) => Math.min(prev + 1, lastPage));
            } else if (e.deltaY < 0) {
                setPage((prev) => Math.max(prev - 1, 0));
            }
        };

        // 이벤트 리스너 추가
        container.addEventListener("touchstart", handleTouchStart, {
            passive: true,
        });
        container.addEventListener("touchend", handleTouchEnd, {
            passive: true,
        });
        window.addEventListener("wheel", handleWheel, { passive: false });

        // 페이지 전환
        container.style.transform = `translateY(${page * -100}vh)`;

        // 클린업
        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchend", handleTouchEnd);
            window.removeEventListener("wheel", handleWheel);
        };
    }, [page, lastPage]);

    return (
        <Wrapper>
            <PageContainer ref={containerRef}>
                <Page>
                    <FirstPageWrapper>
                        <div css={imagecss}>
                            <MainTempCarousel />
                        </div>
                        <div />
                        <TextArea>
                            <TextWrapper>
                                <Title className="text-5xl">예히당</Title>
                                우리쌀로 만든, 우리 디저트
                                <div className="pt-4 text-center">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Proin accumsan sed lectus
                                    eget sodales. Nunc pulvinar gravida magna,
                                    posuere fringilla nibh auctor sed.
                                </div>
                            </TextWrapper>
                        </TextArea>
                        <Downbutton
                            onClick={() =>
                                setPage((prev) => Math.min(prev + 1, lastPage))
                            }
                        >
                            <FaArrowAltCircleDown
                                size={30}
                                color="ffffff"
                                css={{ paddingBottom: "5px" }}
                            />
                        </Downbutton>
                    </FirstPageWrapper>
                </Page>
                <Page>
                    <h1>두 번째 페이지</h1>
                </Page>
                <Page>
                    <h1>세 번째 페이지</h1>
                </Page>
            </PageContainer>
        </Wrapper>
    );
};

export default MainTemp2;
